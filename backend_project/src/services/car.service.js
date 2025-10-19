const Car = require("../models/user.model")

const getAllCarsService = async () => {
    const allCars = await Car.find();

    if(!allCars){
        return {message: "Cars not found", statusCode: 404}
    }

    return allCars;
}

const getCarByIdService = async (id) => {

    const car = await Car.findById(id);

    if(!car){
        return {message: "Car not found", statusCode: 404}
    }
    
    return car;
}

const addCarService= async (car) => {
    try{
        const newCar = new Car(car)

        await newCar.save()
        return {message: "Car added successfully", statusCode: 201};
    }catch(error){
        return {message: error, statusCode: 500}
    }
}

const updateCarService = async (id, carToUpdate) => {
    try {
        const carById = await Car.findById(id);

        if(!carById){
            return {message: "Car not found", statusCode: 404}
        }

        carById.brand = carToUpdate.brand;
        carById.price = carToUpdate.price;
        carById.model = carToUpdate.model;
        carById.year = carToUpdate.year;
        carById.isNewCar = carToUpdate.hasOwnProperty("isNewCar" )
            ? carToUpdate.isNewCar
            : carById.isNewCar;

        await carById.save();
        return {message: "Car updated successfully", statusCode: 201};
    } catch(error) {
        return {message: error, statusCode: 500}
    }
}

const deleteCarService = async (id) => {
    try {

        const car = await Car.findByIdAndDelete(id);

        if(!car){
            return {message: "Car not found", statusCode: 404}
        }

        return {message: "Car deleted successfully", statusCode: 201};
    } catch(error){
        return {message: error, statusCode: 500}
    }
}

module.exports = {getAllCarsService, getCarByIdService, addCarService, updateCarService, deleteCarService}