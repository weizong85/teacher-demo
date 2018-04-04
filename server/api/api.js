const router = require('express').Router();

// api router will mount other routers for all our resources
router.use('/commonstudents', require('./teacher/commonstudents'));
router.use('/register', require('./students/register'));
router.use('/suspend', require('./suspend/suspend'));
router.use('/retrievefornotifications', require('./notification/retrievefornotifications'));

module.exports = router;