const express = require("express")
const app = express()
const { createUserRoutes } = require('./routes/user')
const { createCourseRoutes } = require('./routes/course')

createUserRoutes()
createCourseRoutes()

app.listen(5500)