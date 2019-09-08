const mongoose = require('../db/dbConnection');
const Schema = mongoose.Schema;


// SEMI-FULL SCHEMA
const BusinessSchema = new Schema({
    _id: Number,
    name: {
      type: String,
      required: true
    },
    type:{
        type: String,
        enum: ["caffe", "restaurant", "club", "pub"],
        required: true
    },
    description: {
      type: String,
      required: true
    },
    stars: {
      type: Number,
      required: true
    },
    location: {
      coordinates: {
        type: [Number],
        default: [0, 0]
      },
      address: {
        type: String,
        required: true
      }
    },
    operatingHours: {
      open: {
        type: String,
        required: true
      },
      close: {
        type: String,
        required: true
      }
    },
    kosher: {
        type: Boolean,
        required: true
    },
    dishesTypes: [
      {
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
      }
    ],
    price_level: {
        type: Number,
        required: true
    },
    imageURL: {
        type: String,
        required:false
    }
  });

  BusinessSchema.set("toJSON", {
    transform: function(doc, returned, options) {
      returned.id = returned._id;
      delete returned._id;
    }
  });

  module.exports = mongoose.model("Business", BusinessSchema);
// module.exports = BusinessSchema;