const {getAllCarsService, getCarByIdService, addCarService, updateCarService, deleteCarService} = require("../services/car.service")

const getAllCarsController = async (_, response) => {
    const allCars = await getAllCarsService()

    response.json(allCars);
}

const getCarByIdController = (_, response) => {}
const addCarController = (request, response) => {}
const updateCarController = (request, response) => {}
const deleteCarController = (_, response) => {}


module.exports = {getAllCarsController, getCarByIdController, addCarController, updateCarController, deleteCarController}