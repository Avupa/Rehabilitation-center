const fs = require('fs/promises');

async function checkAndCreateFolder(pathToDir) {
  const folderPath = pathToDir;

  try {
    // Проверяем, существует ли папка img/avatars
    await fs.access(folderPath);

    console.log('Папка img уже существует.');
  } catch (error) {
    // Если папка не существует, создаем ее
    if (error.code === 'ENOENT') {
      try {
        await fs.mkdir(folderPath, { recursive: true });
        console.log('Папка img успешно создана.');
      } catch (err) {
        console.error('Ошибка при создании папки img:', err);
      }
    } else {
      console.error('Ошибка при проверке папки img:', error);
    }
  }
}

module.exports = checkAndCreateFolder;