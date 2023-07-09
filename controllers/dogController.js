const Dog = require('../models/dogs.js');

const getDogs = (request, response) => {
    const dogs = Dog.getAll();
    response.send({dogs});
};

module.exports = {
    getDogs
    // getOneDog,
    // createDog,
    // updateDog,
    // deleteDog,
};