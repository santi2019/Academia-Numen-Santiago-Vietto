const express = require('express');
const UsersRouter = require('../routes/users.routes')
const AuthRouter = require('../routes/auth.routes')

const app = express();

app.use(express.json()) 

app.use("/users", UsersRouter)
app.use("/auth", AuthRouter)

app.get("/", (_, response) => {
    response.send("Bienvenido al servidor de login/register")
})

module.exports = app;