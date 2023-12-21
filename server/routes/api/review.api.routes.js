const router = require("express").Router();
const { Review, User, Doctor } = require("../../db/models");

//INIT
router.get("/", async (req, res) => {
  // console.log('i am here, Review');
  try {
    const data = await Review.findAll({
      include: [{ model: User }, { model: Doctor }],
    });
    // const data=dataFirst.map(dataf=>[...dataf, dataf.SpecialOfDoctor.reduce((accumulator, Specialization.name) => accumulator + Specialization.name,'',)])
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//ADD

router.post("/add", async (req, res) => {
  const { grade, description, doctorId, userId } = req.body;
  console.log(req.body, "////////////////////////////////////");
  try {
    const data = await Review.create({
      grade,
      description,
      doctorId,
      userId,
    });
    if (data) {
      res.send({ message: "Review was added", action: true, data });
    } else {
      res.send({ message: "Review wasnot added", action: false });
    }
  } catch (message) {
    res.send({ message, action: false, dop: "me" });
  }
});

//DELETE

router.delete("/:id", async (req, res) => {
  try {
    const doctor = await Review.findOne({ where: { id: req.params.id } });
    if (doctor) {
      const response = await Review.destroy({
        where: { id: req.params.id },
      });
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
  const { name, description, categoryId } = req.body;
  //   console.log(id, name, description, categoryId);
  try {
    const updateDoctor = await Review.update(
      { name, description, categoryId },
      { where: { id } }
    );
    if (updateDoctor > 0) {
      const data = await Review.findOne({ where: { id } });
      res.json(data);
    } else {
      res.json({ message: "Review wasnot updated", action: false });
    }
  } catch (message) {
    res.json({ message, action: false });
  }
});

module.exports = router;
