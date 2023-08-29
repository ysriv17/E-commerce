const mongoose = require("mongoose");
const signupschema = new mongoose.Schema({
    name: {
        type: String,
        required: [true]
    },
    email: {
        type: String,
        required: [true]
    },
    age: {
        type: Number
    },
    password: {
        type: String,
        required: [true]
    },
    createdAt: { type: String },
    updatedAt: { type: String, },
    isActive: { type: Boolean }
}, {
    timestamps: true,
});
module.exports = mongoose.model("signup", signupschema)