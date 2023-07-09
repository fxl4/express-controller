const express = require('express');
const cors = require('cors');
// const logger = require('morgan');

// Controllers
const catController = require('./controllers/catController.js')
const dogController = require('./controllers/dogController.js')

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    response.send({msg: 'Server Running'});
});

// Cats Routes

app.get('/cats', catController.getCats);
// app.get('/cats/:id', catController.getOneCat);

// Dog routes

app.get('/dogs', dogController.getDogs);
// app.get('/dogs/:id', dogController.getOneDog);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))