const router = require('express').Router();

// API
const noNameUsersApiRouter=require('./api/noNameUser.api.routes');
const authApiRouter = require('./api/auth.api.routes')


// Endpoint Protection


// router.use('/api/users', rejectIfNotAuthorized, usersApiRouter);
router.use('/api/auth', authApiRouter)
router.use('/api/noNameUsers/', noNameUsersApiRouter)

module.exports = router;