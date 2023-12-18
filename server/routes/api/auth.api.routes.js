const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const { generateTokens } = require('../../utils/authUtils');
const cookiesConfig = require('../../config/cookiesConfig');
const { Op } = require('sequelize');

router.post('/registration', async (req, res) => {
  try {
    const { firstName, secondName, patronymic, telephone, email, password } =
      req.body;
    if (firstName && secondName && telephone && email && password) {
      let user = await User.findOne({
        where: {
          [Op.or]: [{ email }, { telephone }],
        },
      });
      if (user) {
        if (user.email === email) {
          res.status(400).json({ message: 'Такая почта уже зарегистрирована' });
        } else {
          res
            .status(400)
            .json({ message: 'Данный телефон уже зарегистрирован' });
        }
      } else {
        const hash = await bcrypt.hash(password, 10);
        user = await User.create({
          firstName,
          secondName,
          patronymic,
          telephone,
          email,
          password:hash,
        });

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
        console.log( accessToken, refreshToken);

        res
          .cookie(cookiesConfig.access, accessToken, {
            maxAge: cookiesConfig.maxAgeAccess,
            httpOnly: true,
          })
          .cookie(cookiesConfig.refresh, refreshToken, {
            maxAge: cookiesConfig.maxAgeRefresh,
            httpOnly: true,
          })
          .status(201)
          .json({
            firstName,
            secondName,
            patronymic,
            id: user.id,
            email,
            telephone,
          });
      }
    } else {
      res.status(400).json({ message: 'Заполните все необходимые поля' });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ where: { email } });
      if (user && (await bcrypt.compare(password, user.password))) {
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

        res
          .cookie(cookiesConfig.access, accessToken, {
            maxAge: cookiesConfig.maxAgeAccess,
            httpOnly: true,
          })
          .cookie(cookiesConfig.refresh, refreshToken, {
            maxAge: cookiesConfig.maxAgeRefresh,
            httpOnly: true,
          })
          .status(200)
          .json({
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            secondName: user.secondName,
            patronymic: user.patronymic,
            telephone: user.telephone,
          });
      } else {
        res.status(400).json({ message: 'Неверные данные!' });
      }
    } else {
      res.status(400).send('Заполните все поля');
    }
  } catch (err) {
    // console.log(err.message);
    res.status(500).json(err.message);
  }
});

router.get('/logout', (req, res) => {
  try {
    res.clearCookie(jwtConfig.access.type).clearCookie(jwtConfig.refresh.type);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/check', (req, res) => {
  if (res.locals.user) {
    res.json({ message: 'success', user: res.locals.user });
  } else {
    res.status(401).json({ message: 'Пользователь не аутентифицирован' });
  }
});

module.exports = router;
