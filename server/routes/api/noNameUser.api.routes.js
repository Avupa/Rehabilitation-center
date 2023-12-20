const router = require("express").Router();
const { noNameUser, User } = require("../../db/models/");

router.get("/", async (req, res) => {
  // console.log('i am here');
  try {
    const data = await noNameUser.findAll();
    //console.log(data);
    return res.json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.delete("/:idNoNameUser", async (req, res) => {
    const {idNoNameUser}=req.params
    //const idUser=res.locals.user.id
   const idUser=1
    try {
        const userInDb = await User.findOne({ where: { id: Number(idUser)} });
        if (userInDb.isAdmin === true) {
          const User= await noNameUser.findOne({ where: { id: Number(idNoNameUser)} });
          const delNoNameUser = await noNameUser.destroy({ where: { id: Number(idNoNameUser)} });
          if (delNoNameUser > 0) {
            res.json({id:User.id});
          } else {
            res.json({ message: "User wasnot deleted", action: false });
          }
        }else{
        res.json({ message: "your are not admin", action: false })};
      } catch (message) {
        res.json({ message, action: false });
      }
    });

    
module.exports = router;
