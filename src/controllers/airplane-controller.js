const {AirplaneService}=require("../services/index")
const {StatusCodes}=require("http-status-codes")


async function createAirplane(req, res){
    try {
        const airplane=await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber ,
            capacity:req.body.capacity
        })
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:"Successfully created the airplane",
            error:{},
            data:airplane

        });
        
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            error:{
                error
            },
            message:"Something went wrong while creating an airplane",
            data:{}
        })
    }
}


module.exports={
    createAirplane
}