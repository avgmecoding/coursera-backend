function createUserRoutes(app){
    app.post("/user/signup", function(req, res){
        res.send({
            msg: "signup endpoint"
        })
    })

    app.post("/user/login", function(req, res){
        res.send({
            msg: "login endpoint"
        })
    })

    app.get("/user/purchase", function(req, res){
        res.send({
            msg: "purchase endpoint"
        })
    })
}

module.exports = {
    createUserRoutes: createUserRoutes
}