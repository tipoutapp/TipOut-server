const mongoose = require('../db/dbConnection');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: Number,
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    activeTime: {
        type: String,
        required: true
    },
    activeDays: {
        type: String,
        enum: ["sunday",
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday"],
        required: true
    },
    food: {
        type: String,
        enum: [
            "Homemade",
            "Barbecue",
            "Fast-Food",
            "Pasta",
            "Pizza",
            "Dessert",
            "Japanese",
            "Salad",
            "Seafood",
            "Asian"
          ],
        required: true
    },
    activities: {
        type: String,
        enum: ["caffe", "restaurant", "club", "pub"],
        required: true
    },
    kosher: {
        type: Boolean,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Users', userSchema);