const router=require('express').Router()
const Home = require('../../components/Home')

module.exports=router.get('/', (req,res)=>{
    const html=res.renderComponent(Home, {title:'Home'});
  res.send(html);
});