const express = require('express');
const router = express.Router();
const { recentUpdates } = require('../controllers/home-Controllers');

router.get('/recentupdates', recentUpdates);

module.exports = router;