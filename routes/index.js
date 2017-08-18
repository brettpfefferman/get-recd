var router = require('express').Router();
var passport = require('passport');
var List = require('../models/list');

router.get('/', function(req, res) {
  List.find({}, (err, lists) => {
    res.render('index', {user: req.user, lists: lists});
  })
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
