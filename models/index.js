const mongoose = require('mongoose');

const User = require('./user');
const Event = require('./event');

const connectDb = () => {
    console.log()
  return mongoose.connect('mongodb://127.0.0.1/event_panner', { useNewUrlParser: true });
};

const models = { User, Event };

const createUsersWithMessages = async () => {
    const user1 = new models.User({
      username: 'rwieruch',
    });
  
    await user1.save();
  };

module.exports = {
    connectDb,
    models: models,
    createUsersWithMessages: createUsersWithMessages
};