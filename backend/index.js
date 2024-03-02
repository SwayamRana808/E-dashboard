const express=require('express')
const cors=require("cors")
require('./db/config')
const User=require("./db/users")
const Product=require("./db/product")
const Jwt=require('jsonwebtoken');
const jwtKey='e-comm'
const app=express()
app.use(cors())
app.use(express.json())
app.post('/register',async(req,res)=>{
    let user=new User(req.body)
    let result =await user.save()
    result=result.toObject()
    delete result.password;
    Jwt.sign({result},jwtKey,{expiresIn:"2h"},(err,token)=>{
        if(err){
            res.send({result:"something went wrong"})
        }
        res.send({result,auth:token})
    })
 
})
app.post('/login',async (req,res)=>{
    
    
    if(req.body.password && req.body.email){
        let user=await User.findOne(req.body).select('-password');
        if(user){

            Jwt.sign({user},jwtKey,{expiresIn:"2h"},(err,token)=>{
                if(err){
                    res.send({result:"something went wrong"})
                }
                res.send({user,auth:token})
            })
            
        }
        else{
            res.send({result:"no user found"})
        }
        
    
    }else{
        res.send({result:"no user found"})
    }
  
})

app.post('/addProduct',verifyToken,async( req,res)=>{
//  let product=new Product(req.body)
//  let result=await product.save();
 let result=await Product.create(req.body)
 res.send(result)

})

app.get('/products',verifyToken,async(req,res)=>{
  let products=await Product.find()
  if(products.length>0){
   res.send(products)
   console.log(products)
  }else{
    res.send({result:"no result found"})
  }
})
app.delete('/products/:id',verifyToken,async(req,res)=>{
    const result = await Product.deleteOne({_id:req.params.id})
    if(result){
        res.send(req.params)
    }else{
        res.send("nothing deleted")
    }
    
})
app.get("/products/:id",verifyToken,async(req,res)=>{
    let result=await Product.findOne({_id:req.params.id})
    if(result){
        res.send(result)

    }else{
        res.send("product not found!")
    }
})

app.put("/products/:id",verifyToken,async(req,res)=>{
    let result =await Product.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        })
        res.send(result)
        console.log(result,"data send by update")
})
app.get('/search/:key',verifyToken,async(req,res)=>{
    let result=await Product.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {company:{$regex:req.params.key}},
            {category:{$regex:req.params.key}}
        ]
    });
    res.send(result)
})
function verifyToken(req,res,next){
    let token=req.headers['authorization'] //a should be small, capital not working 
    if(token){
         token= token.split(' ')[1];
         console.log("middleware called", token[1])
         Jwt.verify(token,jwtKey,(err,valid)=>{
            if(err){
              res.status(401).send({result:"please send valid token"});
            }else{
              next();
            }
         })
    }else{
        res.send({result:"PLease add token with header"})
    }
    
}
app.listen(5000)
