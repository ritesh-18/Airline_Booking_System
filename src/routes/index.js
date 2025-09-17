const express=require("express")
const v1Routes=require("./v1")
const router=express.Router()



 router.use("/v1" , v1Routes) // whenever a url comes as /v1 hit then exexute this V1Routes and same thing you can do with v2 version



module.exports=router