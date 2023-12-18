const router = require("express").Router();
const { Doctor, SpecialOfDoctor, Specialization } = require("../../db/models");

//INIT
router.get("/", async (req, res) => {
  // console.log('i am here, doctor');
  try {
    const data = await Doctor.findAll({
      include: { model: SpecialOfDoctor, include: { model: Specialization } },
    });
    // console.log(data);
    // const data=dataFirst.map(dataf=>[...dataf, dataf.SpecialOfDoctor.reduce((accumulator, Specialization.name) => accumulator + Specialization.name,'',)])
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//ADD

router.post("/add", async (req, res) => {
  const { description } = req.body;
  // console.log(req.body, "req");
  try {
    const data = await Doctor.create({
      firstName,
      secondName,
      patronymic,
      description,
      img,
      slot: Number(slot),
    });
    if (data) {
      res.send({ message: "Doctor was added", action: true, data });
    } else {
      res.send({ message: "Doctor wasnot added", action: false });
    }
  } catch (message) {
    res.send({ message, action: false, dop: "me" });
  }
});

//DELETE

router.delete("/:id", async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ where: { id: req.params.id } });
    if (doctor) {
      const response = await Doctor.destroy({ where: { id: req.params.id } });
      if (response) {
        res.status(200).json({ id: doctor.id });
      } else {
        res.status(400).json({ message: "Произошла ошибка при удалении" });
      }
    }
  } catch (message) {
    res.json({ message, action: false });
  }
});

//UPDATE

router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { firstName, secondName, patronymic, description, img, slot } =
    req.body;
  // console.log(firstName, secondName, patronymic, description, img, slot, id);
  try {
    const updateDoctor = await Doctor.update(
      { firstName, secondName, patronymic, description, img, slot },
      { where: { id } }
    );
    if (updateDoctor > 0) {
      const data = await Doctor.findOne({ where: { id } });
      res.json(data);
    } else {
      res.json({ message: "Doctor wasnot updated", action: false });
    }
  } catch (message) {
    res.json({ message, action: false });
  }
});

module.exports = router;
