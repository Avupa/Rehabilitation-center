const router = require("express").Router();
const { Schedule, Appointment, Specialization } = require("../../db/models");


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

//INIT SPEC
router.get("/initSpec", async (req, res) => {
    console.log('find spec>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  try {
      const allSpec = await Specialization.findAll();
     
      res.status(200).json(allSpec);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  });

   //MAKE APPOINTMENT
router.post("/makeAppoint", async (req, res) => {
  const userID='1' //change then you have registration
  const {slot}=req.body
  console.log(slot);
    try {
      const newApp=await Appointment.create({userId:userID})
      console.log(newApp);
      const oneSlots = await Schedule.findOne({where: {doctorId:slot.id, data:slot.date, timeSlot:slot.slot}});
      const updateSlot=await Schedule.update({appointmentId:newApp.id},{ where: { id:oneSlots.id } })
      console.log('first', updateSlot);
      res.status(200).json({updateSlot});
    } catch (error) {
      res.status(500).json({ message: error });
    }
  });

   module.exports = router;
