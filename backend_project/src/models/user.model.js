const {model, Schema} = require('mongoose');

const CarSchema = Schema({
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    isNewCar: {
        type: Boolean,
        required: true
    }
});


const Car = model("Car", CarSchema);

module.exports = Car;
