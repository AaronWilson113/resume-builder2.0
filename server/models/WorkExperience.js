const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userWorkExperience = new Schema({
    position: {
        type: String,
        required: true,
      },
      companyName: {
          type: String,
          required: true
      }, 
      employmentType: {
          type: String,
          required: true
      },
      location: {
          type: String, 
          required: true
      },
      startDate: {
          type: Date,
          required: true
      },
      endDate: {
          type: Date, 
          required: false
      }, 
      description: {
          type: String,
          required: true
      }
});


module.exports = mongoose.model('workExperience', userWorkExperience);