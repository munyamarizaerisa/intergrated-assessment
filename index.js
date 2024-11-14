const express = require ('express');
const router= express();
const port =3000;
Router.get('/',(req,res)=>{
    res.status(200).json({messages:'this is our integration for using get'})
});
router.post('/',(req,res)=>{
    res.status(200).json({messages:'this is our integration for using post'})
})

app.listen(port,()=>{
    console.log(`server is running at localhost: ${port}`)
});