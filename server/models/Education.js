const { stringifyForDisplay } = require("@apollo/client/utilities");
const { introspectionFromSchema } = require("graphql");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const userEducation = new Schema({
    schoolName: {
      type: String,
      required: true,
    },
    majorSubject: {
        type: String,
        required: true
    }, 
    degree: {
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
    location: {
        type: String, 
        required: true
    }

});


const userEd = mongoose.model("UserEducation", userEducation);

module.exports = userEd;