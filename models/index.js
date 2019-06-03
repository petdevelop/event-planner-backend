const mongoose = require('mongoose');

const User = require('./user');
const Event = require('./event');

const connectDb = () => {
    console.log()
  return mongoose.connect('mongodb://127.0.0.1/event_panner', { useNewUrlParser: true });
};

const models = { User, Event };

module.exports = {
    connectDb,
    models: models
};