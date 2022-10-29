const mongoose = require("mongoose");

const { Schema } = mongoose;

const userPersonal = new Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
          type: String,
          required: true
      }, 
      phoneNumber: {
          type: Number,
          required: true
      },
      city: {
          type: String, 
          required: true
      },
      state: {
          type: String,
          required: true
      }

});


module.exports = mongoose.model('personal', userPersonal);