const router = require("express").Router();
const { noNameUser, User } = require("../../db/models/");
const { rejectIfNotAdmin } = require("../../middleware/auth");

// INIT

router.get("/",  async (req, res) => {
  // console.log('i am here');
  try {
    const data = await noNameUser.findAll();
    //console.log(data);
    return res.json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//DELETE

router.delete("/:idNoNameUser", async (req, res) => {
  try{
  const initiator=res.locals.user.id
  const isHeAdmin=await User.findOne({where:{id:initiator, isAdmin:true}})
  const {idNoNameUser}=req.params
  console.log(isHeAdmin);
  if(isHeAdmin.isAdmin){ 
          const User= await noNameUser.findOne({ where: { id: Number(idNoNameUser)} });
          const delNoNameUser = await noNameUser.destroy({ where: { id: Number(idNoNameUser)} });
          if (delNoNameUser > 0) {
            res.json({id:User.id});
          } else {
            res.json({ message: "User wasnot deleted", action: false });
          }
        }else{
        res.json({ message: "your are not admin", action: false })}
      } catch (message) {
        res.json({ message, action: false });
      }
    });

//ADD

router.post("/add", async (req, res) => {
 
  const {name, telephone, description} = req.body.obj;
  console.log(name, telephone, description);
  try {
    const data = await noNameUser.create({
      name, telephone, description
    });
    if (data) {
      res.status(200).json({ message: "noNameUser was added", action: true, data });
    } else {
      res.status(400).json({ message: "noNameUser wasnot added", action: false });
    }
  } catch (message) {
    res.status(500).json({ message, action: false, dop:'me'  });

  }
});

    
module.exports = router;
