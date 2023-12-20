require('@babel/register');
const express = require('express');
const config = require('./config/serverConfig');
const indexRouter = require('./routes/index.routes');
const wsServer = require('./wsServer')

const app = express();
const PORT = process.env.PORT ?? 4000;

config(app);
wsServer();

app.use('/', indexRouter);
app.listen(PORT, () => console.log(`Server started at ${PORT}`));
