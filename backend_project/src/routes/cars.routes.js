const express = require("express");
const {getAllCarsController, getCarByIdController, addCarController, updateCarController, deleteCarController} = require("../controllers/cars.controller");

const carsRouter = express.Router();   


carsRouter.get("/", getAllCarsController)
carsRouter.get("/", getCarByIdController)
carsRouter.post("/", addCarController)
carsRouter.put("/", updateCarController)
carsRouter.delete("/", deleteCarController)



module.exports = carsRouter;