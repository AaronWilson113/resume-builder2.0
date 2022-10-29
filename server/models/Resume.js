const mongoose = require("mongoose");
const { Schema } = mongoose;

const resumeSchema = new Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    experience: [
        {
            companyName:{
                type:String,
                required: true,
            },
            workTenure:{
                type:String,
                required: true,
            },
            title:{
                type:String,
                required: true,
            },
            responsibiliies:{
                type:String,
                required: true,
            },
            keyAchievement:{
                type:String,
            }
        }
    ],
    education:[
        {
        schoolName:{
            type: String,
            required: true
        },
        degree:{
            type: String,
            required: true
        },
        schoolTenure:{
            type: String,
            required: true
        }
    },
    ],
    skills:{
        type: String,
        required:true
    },
    Contact:[
        {
            address: {
                type:String,
                required: true,
            },
            email:{
                type: String,
                required: true
            },
            phoneNumber:{
                type: String, 
                required: true
            }

        }
    ]


})


const Resume = mongoose.model("Resume", resumeSchema);

module.exports = Resume;
