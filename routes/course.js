const { Router } = require("express")
const courseRouter = Router();


courseRouter.get("/preview", function (req, res) {
    res.send({
        msg: "course preview endpoint"
    })
})

courseRouter.post("/purchase", function (req, res) {
    res.send({
        msg: "course purchase endpoint"
    })
})


module.exports = {
    courseRouter: courseRouter
}