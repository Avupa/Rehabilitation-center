const router = require("express").Router();
const { Product } = require("../../db/models");
const ProductModel = require("../../components/Product");

//ADD

router.post("/add", async (req, res) => {
  const { unit, userId } = req.body;
  try {
    const product = await Product.create({
      unit: Number(unit),
      userId: Number(userId),
    });

    const html = res.renderComponent(
      ProductModel,
      { product },
      { DocType: false }
    );
    if (product) {
      res.send({ message: "Unit was added", action: true, html });
    } else {
      res.send({ message: "Unit wasnot added", action: false });
    }
  } catch (message) {
    res.send({ message, action: false });
  }
});

//DELETE

router.delete("/:id/:userid", async (req, res) => {
  const { id, userid } = req.params;

  try {
    const userInDb = await Product.findOne({ where: { id } });
    if (userInDb.userId === Number(userid)) {
      const delUnit = await Product.destroy({ where: { id } });
      if (delUnit > 0) {
        res.json({ message: "Unit was deleted", action: true });
      } else {
        res.json({ message: "Unit wasnot deleted", action: false });
      }
    }else{
    res.json({ message: "its not your product", action: false })};
  } catch (message) {
    res.json({ message, action: false });
  }
});

//UPDATE

router.put("/update", async (req, res) => {
    const { id, unit, userid } = req.body;
  
    try {
      const userInDb = await Product.findOne({ where: { id } });
      if (userInDb.userId === Number(userid)) {
        const updateUnit = await Product.update({unit},{ where: { id } });
        if (updateUnit > 0) {
            const html=res.renderComponent(ProductModel, {updateUnit}, { DocType: false })
          res.json({ message: "Unit was deleted", action: true , html});
        } else {
          res.json({ message: "Unit wasnot deleted", action: false });
        }
      }else{
      res.json({ message: "its not your product", action: false })};
    } catch (message) {
      res.json({ message, action: false });
    }
  });

module.exports = router;
