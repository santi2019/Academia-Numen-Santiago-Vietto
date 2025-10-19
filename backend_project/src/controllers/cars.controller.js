const {getAllCarsService, getCarByIdService, addCarService, updateCarService, deleteCarService} = require("../services/car.service")

const getAllCarsController = async (_, response) => {
    const allCars = await getAllCarsService()

    response.json(allCars);
}

const getCarByIdController = async (request, response) => {

    const {id} = request.params;

    const car = await getCarByIdService(id);

    response.json(car);
}

const addCarController = async (request, response) => {
    
    const newCar = request.body;

    const message = await addCarService(newCar);

    response.json(message);

}

const updateCarController = async (request, response) => {
    
    const {id} = request.params;
    const carToUpdate = request.body;

    const message = await updateCarService(id, carToUpdate);

    response.json(message);
}

const deleteCarController = async (request, response) => {

    const {id} = request.params;

    const message = await deleteCarService(id);

    response.json(message);
}


module.exports = {getAllCarsController, getCarByIdController, addCarController, updateCarController, deleteCarController}