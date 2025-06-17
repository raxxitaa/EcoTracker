const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Activity', activitySchema);

