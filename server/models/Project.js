const mongoose = require("mongoose");

const  Schema  = mongoose.Schema;

const userProjects = new Schema({
    title: {
        type: String,
        required: true,
      },
      link: {
          type: String,
          required: true
      }, 
      about: {
          type: String,
          required: true
} 

});


module.exports = mongoose.model('projects', userProjects);