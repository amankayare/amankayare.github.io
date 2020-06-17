const express = require('express');
const mongoose = require('mongoose');

const genres = require('./routes/genres');
const customers = require('./routes/customers');

require('dotenv').config();
const app = express();
const Joi = require('joi');

app.use(express.json());
//app.use('/api/genres', genres);


mongoose.connect('mongodb://localhost/chat-room')
    .then(() => console.log('Chat-Room database connected successfully...'))
    .catch((error) => console.log(error.message));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening at port ${port}....`));
