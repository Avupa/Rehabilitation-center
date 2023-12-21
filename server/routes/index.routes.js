const router = require('express').Router();

// API
const noNameUsersApiRouter = require('./api/noNameUser.api.routes');
const doctorApiRouter = require('./api/doctor.api.routes');
const authApiRouter = require('./api/auth.api.routes');
const reviewApiRouter = require('./api/review.api.routes');
const appointApiRouter = require('./api/appoint.api.routes');
const procedureApiRouter = require('./api/procedure.api.routes');
const messagesApiRouter = require('./api/messages.api.routes');
const chatApiRouter = require('./api/chat.api.routes');
const priceApiRouter = require('./api/price.api.routes')


router.use('/api/auth', authApiRouter);
router.use('/api/noNameUsers/', noNameUsersApiRouter);
router.use('/api/doctors/', doctorApiRouter);
router.use('/api/appointment/', appointApiRouter);
router.use('/api/procedures/', procedureApiRouter);
router.use('/api/reviews/', reviewApiRouter);
router.use('/api/messages', messagesApiRouter);
router.use('/api/chat', chatApiRouter);
router.use('/api/price', priceApiRouter);

module.exports = router;
