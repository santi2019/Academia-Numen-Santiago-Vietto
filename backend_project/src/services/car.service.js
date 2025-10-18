const Car = require("../models/user.model")

const getAllCarsService = async () => {
    const allCars = await Car.find();

    if(!allCars){
        return {message: "Cars not found", statusCode: 404}
    }

    return allCars;
}

const getCarByIdService = () => {}
const addCarService= () => {}
const updateCarService = () => {}
const deleteCarService = () => {}

module.exports = {getAllCarsService, getCarByIdService, addCarService, updateCarService, deleteCarService}