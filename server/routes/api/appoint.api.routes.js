const router = require("express").Router();
const { Op } = require("sequelize");

// SELECT * FROM post WHERE authorId = 2;
const { Schedule, Appointment, Specialization, User, Doctor } = require("../../db/models");


//INIT DATE FREE
router.post("/freeDate", async (req, res) => {
    try {
      const allSlots = await Schedule.findAll();
      res.status(200).json(allSlots);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  });


//INIT
router.post("/findDate", async (req, res) => {
   const {date}=req.body
     try {
       const allSlots = await Schedule.findAll({where: {doctorId:req.body.doctorid, data:date, appointmentId:null}});
       res.status(200).json(allSlots);
     } catch (error) {
       res.status(500).json({ message: error });
     }
   });

//Strange
   router.post("/strange", async (req, res) => {
    const {nnu}=req.body
      try {
        res.status(200).json(nnu);
      } catch (error) {
        res.status(500).json({ message: error });
      }
    });
 

//INIT SPEC
router.get("/initSpec", async (req, res) => {
  try {
      const allSpec = await Specialization.findAll();
      res.status(200).json(allSpec);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  });

   //MAKE APPOINTMENT
router.post("/makeAppoint", async (req, res) => {
 //change then you have registration  const userID='1' 
 if(res.locals.user.id){
 const userID=res.locals.user.id
  const {id, date, slot, adminComment}=req.body
    try {
      const newApp=await Appointment.create({userId:userID, adminComment})
      const oneSlots = await Schedule.findOne({where: {doctorId:id, data:date, timeSlot:slot}});
      const updateSlot=await Schedule.update({appointmentId:newApp.id},{ where: { id:oneSlots.id } })
      res.status(200).json({id:oneSlots.id, date:oneSlots.data, time:oneSlots.timeSlot, adminComment});
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }else{  
  }
  });

  //FOR Admin
router.get("/admin", async (req, res) => {
  
  const stringDate = [new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()].join('-');
  console.log(stringDate);
  try {
      const allSlots = await Appointment
      .findAll({
        include: [{
          model: User,
          attributes: ["id","firstName", "secondName", "patronymic", "telephone", "email", "isAdmin"]},
          {
            model: Schedule, where: {data:{[Op.eq]:"2023-12-26"} },
            attributes: ["data", "timeSlot"],
            include: { model: Doctor, attributes: ["firstName", "patronymic", "secondName"] },
          }]
        }); 
     console.log(allSlots);

     const allSlotsFine= allSlots.map(
      (el) =>
        (el = {
          id:el.id,
          adminComment:el.adminComment,
          userName: el.User.firstName+' '+el.User.patronymic+' '+el.User.secondName,
          userTelephone: el.User.telephone,
          userEmail:el.User.email,
          userAdmin:el.User.isAdmin,date:el.Schedules[0].data,
          time:el.Schedules[0].timeSlot,
          DoctorName:
            el.Schedules[0].Doctor.firstName +
            " " +
            el.Schedules[0].Doctor.patronymic +
            " " +
            el.Schedules[0].Doctor.secondName,
        })    );
        const allSlotsFine2= allSlotsFine.map(
          (el) =>
            (el.userAdmin?{
              id:el.id,
              adminComment:el.adminComment,
              userName: "Заявка без регистрации",
              userTelephone: "см Комментарии",
              userEmail:"см Комментарии",
              date:el.date,
              time:el.time,
              DoctorName:el.DoctorName
            }:{
              id:el.id,
              adminComment:el.adminComment,
              userName: el.userName,
              userTelephone: el.userTelephone,
              userEmail:el.userEmail,
              date:el.date,
              time:el.time,
              DoctorName:el.DoctorName})   ) 

      res.status(200).json(allSlotsFine2);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  });

   module.exports = router;
