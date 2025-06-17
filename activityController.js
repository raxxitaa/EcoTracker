const Activity = require('../models/Activity');

const createActivity = async (req, res) => {
  try {
    const { type, description } = req.body;

    const newActivity = new Activity({
      userId: req.user.userId,
      type,
      description
    });

    await newActivity.save();

    res.status(201).json({ message: 'Activity added!', activity: newActivity });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add activity', error: err.message });
  }
};

const getUserActivities = async (req, res) => {
  try {
    const activities = await Activity.find({ userId: req.user.userId });
    res.json(activities);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch activities', error: err.message });
  }
};

module.exports = { createActivity, getUserActivities };

