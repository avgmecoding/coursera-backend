const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config();
const { userRouter } = require("./routes/user")
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const mongo_uri =  process.env.MONGO_URI;
const port = process.env.PORT;
const app = express()

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);    
app.use("api/v1/admin", adminRouter)

async function main(){
    await mongoose.connect(mongo_uri)
    app.listen(port) 
    console.log(`server listening on port ${port}`);
}

main()