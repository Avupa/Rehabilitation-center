const router = require("express").Router();
const { Doctor, SpecialOfDoctor, Specialization } = require("../../db/models");
const upload = require('../../utils/uploadMulter');

//INIT
router.get("/", async (req, res) => {

 console.log('i am here, doctor');
  try {
    const dataFirst = await Doctor.findAll({include: {model:SpecialOfDoctor,  include:{ model: Specialization}}});
    console.log(dataFirst)
   //const data=dataFirst.map(dataf=>[...dataf, dataf.SpecialOfDoctor.reduce((accumulator, Specialization.name) => accumulator + Specialization.name,'',)])
    res.status(200).json(dataFirst);

  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//ADD

router.post("/add", upload.single('photo'), async (req, res) => {
  const uploadedFile = req.file;
  console.log(uploadedFile);
  const filePath = uploadedFile.path.replace('public', '');

  //const {firstName,  secondName,patronymic, shortDescription, img, description,  slot} = req.body;
  // const file = req.files?.img
  // console.log(req.file, 'this!!!');
  // const arrUrl = await fileUpload(img)
  console.log(filePath, 'req');
  try {
    const data = await Doctor.create({
      firstName,
      secondName,
      patronymic,
      shortDescription,
      description,   
      img:arrUrl,
      slot: Number(slot)
    });
    if (data) {
      res.status(200).json({ message: "Doctor was added", action: true, data });
    } else {
      res.status(400).json({ message: "Doctor wasnot added", action: false });
    }
  } catch (message) {
    res.status(500).json({ message, action: false, dop:'me'  });

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
  console.log(firstName, secondName, patronymic, description, img, slot, id);
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
