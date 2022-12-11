const express = require('express');
const router = express.Router();

// Load each controller
const reviewsController = require('./reviews.js');
const authController = require('./auth.js');
const ratingsController = require('./ratings.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/auth', authController);
router.use("/reviews", reviewsController);
router.use("/ratings", ratingsController);

module.exports = router;