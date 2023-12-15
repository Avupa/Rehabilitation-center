const router = require('express').Router();


// API
const noNameUsersApiRouter=require('./api/noNameUser.api.routes');
const doctorApiRouter=require('./api/doctor.api.routes');

// Endpoint Protection


// router.use('/api/users', rejectIfNotAuthorized, usersApiRouter);

router.use('/api/noNameUsers/', noNameUsersApiRouter)
router.use('/api/doctors/', doctorApiRouter)

module.exports = router;