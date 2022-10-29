const { stringifyForDisplay } = require("@apollo/client/utilities");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const userAbout = new Schema({
    description: {
        type: String,
        required: true
    }
});


const about = mongoose.model("About", userAbout);

module.exports = about;