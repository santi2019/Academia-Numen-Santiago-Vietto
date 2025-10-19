const express = require("express");
const {getAllCarsController, getCarByIdController, addCarController, updateCarController, deleteCarController} = require("../controllers/cars.controller");

const carsRouter = express.Router();   

carsRouter.get("/", getAllCarsController)
carsRouter.get("/:id", getCarByIdController)
carsRouter.post("/", addCarController)
carsRouter.put("/:id", updateCarController)
carsRouter.delete("/:id", deleteCarController)



module.exports = carsRouter;