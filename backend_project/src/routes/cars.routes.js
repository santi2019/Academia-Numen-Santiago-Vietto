const express = require("express");
const {getAllCarsController, getCarByIdController, addCarController, updateCarController, deleteCarController} = require("../controllers/cars.controller");
const checkCarTypes = require("../utils/checkCarTypes");

const carsRouter = express.Router();   

carsRouter.get("/", getAllCarsController)
carsRouter.get("/:id", getCarByIdController)
carsRouter.post("/", checkCarTypes, addCarController)
carsRouter.put("/:id", updateCarController)
carsRouter.delete("/:id", deleteCarController)



module.exports = carsRouter;