require('@babel/register');
const path = require('path');
const express = require('express');
const config = require('./config/serverConfig');
const indexRouter = require('./routes/index.routes');

const app = express();
const PORT = process.env.PORT ?? 4000;

const checkAndCreateFolder = require('./utils/checkAndCreateFolder');
// создание папки для сохранения фотографий пользователя
checkAndCreateFolder(path.join(__dirname, 'public', 'img'))

config(app);

app.use('/', indexRouter);
app.listen(PORT, () => console.log(`Server started at ${PORT}`));
