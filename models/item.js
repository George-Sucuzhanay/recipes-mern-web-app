const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const Recipe = new Schema(
    {
        title: String,
        ingredients: [String],
        cook_time: Number,
        image: String,
        directions: [String],
        Rating: Number
    },
    {timestamps: true}
)

module.exports = mongoose.model("recipes", Recipe)