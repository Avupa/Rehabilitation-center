const router = require("express").Router();
const { Procedure, Category} = require("../../db/models");
const { rejectIfNotAdmin } = require("../../middleware/auth");

//INIT
router.get("/", async (req, res) => {
  // console.log('i am here, procedure');
  try {
    const data = await Procedure.findAll({ raw: true , include:{model: Category, attributes: ['name']}});
    // console.log(data);
    // const data=dataFirst.map(dataf=>[...dataf, dataf.SpecialOfDoctor.reduce((accumulator, Specialization.name) => accumulator + Specialization.name,'',)])
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//ADD

router.post("/add",  async (req, res) => {
  const { name, description, categoryId } = req.body;
  //   console.log(req.body, "req");
  try {
    const data = await Procedure.create({
      name,
      description,
      categoryId: Number(categoryId),
    });
    if (data) {
      res.send({ message: "Procedure was added", action: true, data });
    } else {
      res.send({ message: "Procedure wasnot added", action: false });
    }
  } catch (message) {
    res.send({ message, action: false, dop: "me" });
  }
});

//DELETE

router.delete("/:id",  async (req, res) => {
  try {
    const procedure = await Procedure.findOne({ where: { id: req.params.id } });
    if (procedure) {
      const response = await Procedure.destroy({
        where: { id: req.params.id },
      });
      if (response) {
        res.status(200).json({ id: procedure.id });
      } else {
        res.status(400).json({ message: "Произошла ошибка при удалении" });
      }
    }
  } catch (message) {
    res.json({ message, action: false });
  }
});

//UPDATE

router.put("/update/:id",  async (req, res) => {
  const { id } = req.params;
  const { name, description, categoryId } = req.body;
  //   console.log(id, name, description, categoryId);
  try {
    const updateDoctor = await Procedure.update(
      { name, description, categoryId },
      { where: { id } }
    );
    if (updateDoctor > 0) {
      const data = await Procedure.findOne({ where: { id } });
      res.json(data);
    } else {
      res.json({ message: "Procedure wasnot updated", action: false });
    }
  } catch (message) {
    res.json({ message, action: false });
  }
});

module.exports = router;
