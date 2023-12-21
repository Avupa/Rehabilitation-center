const router = require("express").Router();
const { Price, Procedure, Category } = require("../../db/models/");
const { rejectIfNotAdmin } = require("../../middleware/auth");

// INIT

router.get("/", async (req, res) => {
  console.log("i am here, price");
  try {
    const predata = await Price.findAll({ attributes: ['id', 'price'],
      include: {
        model: Procedure,
        attributes: ['name', 'description'],
        include: { model: Category ,
            attributes: ['name']},
      },
    });
    console.log(predata,'PREDATA');
   const data= predata.map(
        (el) =>
          (el = {
            id:el.id,
            price:el.price,
            name: el.Procedure.name,
            description: el.Procedure.description,
            categoryName:
              el.Procedure.Category.name 
          })
      );


    console.log(data);
    return res.json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
