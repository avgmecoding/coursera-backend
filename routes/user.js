const { Router } = require("express")
const userRouter = Router();

userRouter.post("/signup", function (req, res) {
    res.send({
        msg: "signup endpoint"
    })
})

userRouter.post("/login", function (req, res) {
    res.send({
        msg: "login endpoint"
    })
})

userRouter.get("/purchase", function (req, res) {
    res.send({
        msg: "purchase endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}