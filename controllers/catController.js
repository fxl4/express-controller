const Cat = require('../models/cats.js');


const getCats = (request, response) => {
    const cats = Cat.getAll();
    response.send({cats});
};

module.exports = {
    getCats,
    // getOneCat,
    // createCat,
    // updateCat,
    // deleteCat,
};