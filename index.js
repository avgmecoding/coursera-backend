const express = require("express")
const mongoose = require("mongoose")
const { userRouter } = require("./routes/user")
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express()

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);    
app.use("api/v1/admin", adminRouter)

async function main(){
    await mongoose.connect("mongodb+srv://rajshripatil19022006_db_user:zruXlOjvj08jInnL@cluster0.3svr7b6.mongodb.net/coursera")
    app.listen(5500) 
    console.log("listening on port 5500");
}

main()