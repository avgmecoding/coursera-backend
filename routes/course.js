function createCourseRoutes(app){
    app.get("/course/preview", function(req, res){
        res.send({
            msg: "course preview endpoint"
        })
    })

    app.post("/course/purchase", function(req, res){
        res.send({
            msg: "course purchase endpoint"
        })
    })
}

module.exports = {
    createCourseRoutes: createCourseRoutes
}