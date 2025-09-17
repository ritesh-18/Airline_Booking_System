const CrudRepository =require("./crud-repository")
const {Airplane}=require("../models")


class AirplaneRepository extends CrudRepository{
    constructor(){
        super(Airplane)
    }
   //now we can reuse the methods of CrudRepository
}

module.exports=AirplaneRepository