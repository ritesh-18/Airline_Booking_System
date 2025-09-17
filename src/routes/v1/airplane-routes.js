const {AirplaneController}=require("../../controllers")
const express=require("express")

const router=express.Router()

router.post("/" , AirplaneController.createAirplane)



module.exports=router;