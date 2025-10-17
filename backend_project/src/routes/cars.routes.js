const express = require("express");
const {getAllCars, getCarById, addCar, updateCar, deleteCar} = require("../controllers/cars.controller");

const carsRouter = express.Router();   // localhost:4000/cosmeticos


carsRouter.get("/productos", getAllCars)
carsRouter.get("/productos", getCarById)
carsRouter.post("/productos", addCar)
carsRouter.put("/productos", updateCar)
carsRouter.delete("/productos", deleteCar)



module.exports = carsRouter;