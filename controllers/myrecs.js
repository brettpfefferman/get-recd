var request = require('request');
const rootURL = 'https://api.discogs.com/';
var passport = require('passport');
var List = require('../models/list');
var Album = require('../models/album');

function index(req, res) {
  List.find({user: req.user._id}).populate('albums').exec((err, lists) => {
    res.render('myrecs/index', {user: req.user, lists: lists});
  })  
};

function newRec(req, res) {
  res.render('myrecs/new', {user: req.user});
};

function edit(req, res) {
  res.render('myrecs/edit', {user: req.user});
};

function search(req, res) {
  var listTitle = req.body.title;
  var list = new List({user: req.user._id, title: listTitle, search: req.body.search})
  list.save(function (err, newList) {
    console.log('err =', err)
    if (err) return res.json({err: err})
    console.log('newList =', newList)
    var options = {
      url: rootURL + 'database/search?q=' + req.body.search + '&type=master&format_exact=Vinyl&-format_exact=cd&-format_exact=cassette&-format=promo&type=release&artist=' + req.body.search + '&per_page=100',
      headers: {
        'User-Agent': 'w1lujeng',
        'Authorization': 'Discogs key=' + process.env.DISCOGS_KEY + ',' 
        + 'secret=' + process.env.SECRET
      }
    };
    request(options, function(err, response, body) {
      var records = JSON.parse(body);
      res.render('myrecs/add', {records, user: req.user, newList: newList, listId: list._id.toString()});
    });
  })
}

function add(req, res) {
  var listId = req.params.id;
  var record_ids = req.body.id;
  if (typeof record_ids === 'string') {
    record_ids = [record_ids];
  }

  record_ids.forEach(function(record_id) {
    var options = {
      url: rootURL + 'masters/' + record_id,
      headers: {
      'User-Agent': 'w1lujeng',
      'Authorization': 'Discogs key=' + process.env.DISCOGS_KEY + ',' + 'secret=' + process.env.SECRET
      }
    };

    request(options, function(err, response, body) {
      var record = JSON.parse(body);
      var album = new Album({title: record.title, thumb: record.images[0].uri, url: record.uri, api_id: record.id });
      album.save(function(err, album) {
        List.findById(listId, function(err, list) {
          list.albums.push(album._id);
          list.save();
        })
      });
    });
  });

  res.redirect('/');
};

function about(req, res) {
  res.render('myrecs/about', {user: req.user});
}

function update(req, res) {
  var listId = req.body.id;
  List.findById(req.body.id, (err, list) => {

  var options = {
    url: rootURL + 'database/search?q=' + list.search + '&type=master&format_exact=Vinyl&-format_exact=cd&-format_exact=cassette&-format=promo&type=release&artist=' + list.search + '&per_page=100',
    headers: {
      'User-Agent': 'w1lujeng',
      'Authorization': 'Discogs key=' + process.env.DISCOGS_KEY + ',' 
      + 'secret=' + process.env.SECRET
    }  
  }
  request(options, function(err, response, body) {
    var records = JSON.parse(body);
    res.render('myrecs/update', {records, user: req.user, listId});
  });
})
}

function addmore(req, res) {
  res.redirect('/');
}

function deleteList(req, res) {
  List.findByIdAndRemove(req.params.id, (list) => {
    console.log(list);
  })
  List.find({user: req.user._id}).populate('albums').exec((err, lists) => {
    res.render('myrecs/', {user: req.user, lists: lists} );
  })  
}


module.exports = {
  index,
  new: newRec,
  edit,
  search,
  add,
  about,
  delete: deleteList,
  update,
  addmore
}