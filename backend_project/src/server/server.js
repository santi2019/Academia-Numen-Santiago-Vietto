const express = require("express");
const carsRouter = require("../routes/cars.routes")

const app = express();

app.use(express.json())  
app.use("/cars", carsRouter)


app.get("/", (_, response) => {
    response.send("Bienvenido a mi primer servidor")
})


module.exports = app;