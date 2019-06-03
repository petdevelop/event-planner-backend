const mongoose = require('mongoose');

const User = require('./user');
const Event = require('./event');

const connectDb = () => {
    console.log()
  return mongoose.connect('mongodb://127.0.0.1/event_panner', { useNewUrlParser: true });
};

const models = { User, Event };

const createUsers = async () => {
    const user1 = new models.User({
      username: 'rwieruch',
    });
  
    await user1.save();
  };


  const createEventsWithUser = async () => {
    const user1 = new models.User({
      username: 'parronte',
    });

    const event1 = new models.Event({
      description: 'Birthday',
      user: user1.id,
      date: new Date(),
      location: '12316 witheridge dr'
    });

    const event2 = new models.Event({
      description: 'Baby Shower',
      user: user1.id,     
      date: new Date(),
      location: '8102 sheldon rd apt 201'
    });
  
    await event1.save();
    await event2.save();
    await user1.save();
  };

module.exports = {
    connectDb,
    models,
    createUsers,
    createEventsWithUser
};