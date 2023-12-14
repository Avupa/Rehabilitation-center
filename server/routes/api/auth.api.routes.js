const router = require("express").Router();
const { User } = require("../../db/models");
const bcrypt = require("bcrypt");
const cookiesConfig = require("../../config/cookiesConfig");
const { generateTokens } = require("../../utils/authUtils");

router.post("/register", async (req, res) => {
  try {
    // Получаем данные пользователя из запроса
    const { email, password } = req.body;
    if (email && password) {
      const userInDb = await User.findOne({ where: { email } });

      if (!userInDb) {
        // Хэшируем пароль
        const hashedPassword = await bcrypt.hash(password, 10);

        // Сохраняем пользователя в базу данных
        await User.create({ email, password: hashedPassword });

        // Возвращаем успешный ответ
        return res.status(201).json({
          registration: true,
          url: "/home",
          message: "User successfully registered",
        });
      }

      // Возвращаем ответ в случае вторичного использования почты
      return res.status(400).json({
        registration: false,
        url: "/home",
        message: "This email is already in use",
      });
    }
  } catch (error) {
    // Обрабатываем возможные ошибки
    res.status(500).json({ message: "Registration failed" });
  }
});

router.post("/login", async (req, res) => {
  try {
    // Получаем данные пользователя из запроса
    const { email, password } = req.body;

    if (email && password) {
      // Ищем пользователя в базе данных по имени пользователя
      const userInDb = await User.findOne({ where: { email }, raw: true });

      if (userInDb) {
        // Проверяем правильность пароля
        const passwordMatch = await bcrypt.compare(password, userInDb.password);

        // Если пароль не совпадает, вернуть клиентскую ошибку без указания точной причины для безопасности
        if (!passwordMatch) {
          return res
            .status(403)
            .json({ message: "Incorrect password or email" });
        }
      } else {
        return res.status(404).json({ message: "Incorrect password or email" });
      }

      const { accessToken, refreshToken } = generateTokens({
        user: { id: userInDb.id, email: userInDb.email },
      });

      // Возвращаем токены в httpOnly cookie при ответе
      res
        .cookie(cookiesConfig.refresh, refreshToken, {
          maxAge: cookiesConfig.maxAgeRefresh,
          httpOnly: true,
        })
        .cookie(cookiesConfig.access, accessToken, {
          maxAge: cookiesConfig.maxAgeAccess,
          httpOnly: true,
        })
        .json({ login: true, url: "/products" });
    } else {
      return res.status(400).json({ message: "All fields were not sent" });
    }
  } catch (error) {
    // Обрабатываем возможные ошибки
    res
      .status(500)
      .json({ message: "Authentication Error", error: error.message });
  }
});

module.exports = router;
