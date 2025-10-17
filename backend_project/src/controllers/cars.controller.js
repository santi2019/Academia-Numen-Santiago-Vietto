
const getAllCars = (_, response) => {
    response.json({nombre: "Megane", precio: 5000})
}

const getCarById = (_, response) => {}
const addCar = (request, response) => {}
const updateCar = (request, response) => {}
const deleteCar = (_, response) => {}


module.exports = {getAllCars, getCarById, addCar, updateCar, deleteCar}