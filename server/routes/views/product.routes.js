const router=require('express').Router()
const ProductsList = require('../../components/Products')
const {Product}=require('../../db/models')

module.exports= router.get('/', async (req,res)=>{
    const Products=await Product.findAll();
    const html=res.renderComponent(ProductsList, {title:'Product', Products});
  res.send(html);
});



