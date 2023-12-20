const router = require('express').Router();

// API
const noNameUsersApiRouter=require('./api/noNameUser.api.routes');
const doctorApiRouter=require('./api/doctor.api.routes');
const authApiRouter = require('./api/auth.api.routes')
const procedureApiRouter = require('./api/procedure.api.routes')
const messagesApiRouter = require('./api/messages.api.routes')


// Endpoint Protection


// router.use('/api/users', rejectIfNotAuthorized, usersApiRouter);
router.use('/api/auth', authApiRouter)
router.use('/api/noNameUsers/', noNameUsersApiRouter)
router.use('/api/doctors/', doctorApiRouter)
router.use('/api/procedures/', procedureApiRouter)
router.use('/api/messages', messagesApiRouter)


module.exports = router;