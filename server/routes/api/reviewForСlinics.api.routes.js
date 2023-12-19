const router = require("express").Router();
const { ClinikaReview } = require("../../db/models");

//INIT
router.get("/", async (req, res) => {
  // console.log('i am here, ClinikaReview');
  try {
    const data = await ClinikaReview.findAll({ raw: true });
    // console.log(data);
    // const data=dataFirst.map(dataf=>[...dataf, dataf.SpecialOfDoctor.reduce((accumulator, Specialization.name) => accumulator + Specialization.name,'',)])
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//ADD

router.post("/add", async (req, res) => {
  const { name, description, categoryId } = req.body;
  //   console.log(req.body, "req");
  try {
    const data = await ClinikaReview.create({
      name,
      description,
      categoryId: Number(categoryId),
    });
    if (data) {
      res.send({ message: "ClinikaReview was added", action: true, data });
    } else {
      res.send({ message: "ClinikaReview wasnot added", action: false });
    }
  } catch (message) {
    res.send({ message, action: false, dop: "me" });
  }
});

//DELETE

router.delete("/:id", async (req, res) => {
  try {
    const doctor = await ClinikaReview.findOne({
      where: { id: req.params.id },
    });
    if (doctor) {
      const response = await ClinikaReview.destroy({
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
    const updateDoctor = await ClinikaReview.update(
      { name, description, categoryId },
      { where: { id } }
    );
    if (updateDoctor > 0) {
      const data = await ClinikaReview.findOne({ where: { id } });
      res.json(data);
    } else {
      res.json({ message: "ClinikaReview wasnot updated", action: false });
    }
  } catch (message) {
    res.json({ message, action: false });
  }
});

module.exports = router;
