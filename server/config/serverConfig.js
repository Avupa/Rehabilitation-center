const express = require('express');
const cookieParser = require('cookie-parser');
const { verifyAccessToken } = require('../middleware/verifyTokens');
const { checkUser } = require('../middleware/auth');



const config = (app) => {
  //app.use(fileUpload());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.use(cookieParser());
  app.use(verifyAccessToken);
  app.use(checkUser);
};

module.exports = config;
