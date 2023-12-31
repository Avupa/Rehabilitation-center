require('dotenv').config();
const jwt = require('jsonwebtoken');
const cookiesConfig = require('../config/cookiesConfig');
const { generateTokens } = require('../utils/authUtils');

// Проверка refresh токена из куки
function verifyRefreshToken(req, res, next) {
  try {
    const { refresh } = req.cookies;
    const { user } = jwt.verify(refresh, process.env.REFRESH_TOKEN_SECRET);
    const { accessToken, refreshToken } = generateTokens({
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        secondName: user.secondName,
        patronymic: user.patronymic,
        telephone: user.telephone,
      },
    });

    res.locals.user = user;

    // Возвращаем пару токенов в http-only cookie при ответе
    res
      .cookie(cookiesConfig.refresh, refreshToken, {
        maxAge: cookiesConfig.maxAgeRefresh,
        httpOnly: true,
      })
      .cookie(cookiesConfig.access, accessToken, {
        maxAge: cookiesConfig.maxAgeAccess,
        httpOnly: true,
      });

    next();
  } catch (error) {
    res.clearCookie(cookiesConfig.access).clearCookie(cookiesConfig.refresh);

    next();
  }
}

function verifyAccessToken(req, res, next) {
  try {
    const { access } = req.cookies;
    const { user } = jwt.verify(access, process.env.ACCESS_TOKEN_SECRET);

    res.locals.user = user;
    next();
  } catch (error) {
    verifyRefreshToken(req, res, next);
  }
}

module.exports = {
  verifyAccessToken,
  verifyRefreshToken,
};
