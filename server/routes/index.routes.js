const router = require('express').Router();


// API
const noNameUsersApiRouter=require('./api/noNameUser.api.routes');


// Endpoint Protection


// router.use('/api/users', rejectIfNotAuthorized, usersApiRouter);

router.use('/api/noNameUsers/', noNameUsersApiRouter)

module.exports = router;