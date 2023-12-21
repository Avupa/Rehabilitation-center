const { User } = require('../db/models');
const { verifyAccessToken } = require('./verifyTokens');


// // const ifAuthRedirect = (url) => (req, res, next) => {
// //   if (res.locals.user) {
// //     res.redirect(url);
// //   } else {
// //     next();
// //   }
// // };

// const rejectIfNotAuthorized = (req, res, next) => {
//   //verifyAccessToken()
//   try {
//     if (res.locals.user) {
//       next();}
//   } catch (error) {
//     res.status(403).json({ message: 'No access' });
//   }
//   // if (res.locals.user) {
//   //   next();
//   // } else {
//   //   res.status(403).json({ message: 'No access' });
//   // }
// }
// ;

// const rejectIfNotAdmin = (req, res, next) => {
//   // const Admin= User.findAll({where:{isAdmin:true},
//   //   attributes: ['id'] ,
//   // });
//   verifyAccessToken()
//   try {
//     //const Admin= User.findAll({where:{isAdmin:true}, attributes: ['id']});
//    const  Adminid=1
//    console.log(res.locals.user.id, Adminid, "I AM NOT ADMIN");
//     if (res.locals.user && (+res.locals.user.id===+Adminid)) {
//       console.log("I AM ADMIN");
//       next();}
//   } catch (error) {
//     console.log(res.locals.user.id, Adminid, "I AM NOT ADMIN");
//     res.json({ message: 'No access' });
//   }
//   // const Adminid=1

//   // if (res.locals.user && (res.locals.user.id===Adminid)) {
//   //   next();
//   // } else {
//   //   res.status(403).json({ message: 'No access' });
//   // }
// };

const checkUser = async (req, res, next) => {
  if (res.locals.user) {
    res.locals.user = await User.findByPk(Number(res.locals.user.id), {
      raw: true,
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
    });
  }

  next();
};

module.exports = {
  //ifAuthRedirect,
  // rejectIfNotAuthorized,
  checkUser,
  // rejectIfNotAdmin,

};
