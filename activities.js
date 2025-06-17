const express = require('express');
const router = express.Router();
const { createActivity, getUserActivities } = require('../controllers/activityController');
const auth = require('../middleware/auth');

// Protected Routes
router.post('/', auth, createActivity);        // Create a new activity
router.get('/', auth, getUserActivities);      // Get all activities for logged-in user

module.exports = router;
