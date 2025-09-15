const express =require("express")
const apiRoutes=require("./routes")
const app=express()
const {serverConfig } =require("./config/index")



app.use("/api" , apiRoutes)
app.listen(serverConfig.PORT , ()=>{
    console.log(`server is up and running on port : ${serverConfig.PORT}`)
})