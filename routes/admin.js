const { Router } = require("express")
const adminRouter = Router();


adminRouter.post("/signup", function (req, res) {
    res.send({
        msg: "signup endpoint for admin"
    })
})

adminRouter.post("/login", function (req, res) {
    res.send({
        msg: "login endpoint for admin"
    })
})

// adminRouter.use(adminMiddleware)

adminRouter.post("/course/createCourse", function(req, res){
    res.send({
        msg: "created new course by admin"
    })
})

adminRouter.put("/course/updateCourse", function(req, res){
    res.send({
        msg: "updated the course by admin"
    })
})

adminRouter.get("/course/bulk", function(req, res){
    res.send({

        msg: "see all courses here"
    })
})

module.exports = {
    adminRouter: adminRouter
} 