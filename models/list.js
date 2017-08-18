var mongoose = require('mongoose');

var listSchema = new mongoose.Schema({
  user: String,
  title: String,
  albums: [{type: mongoose.Schema.Types.ObjectId, ref: 'Album'}],
  search: String,
  created: { type: Date, default: Date.now }
})

module.exports = mongoose.model('List', listSchema);

