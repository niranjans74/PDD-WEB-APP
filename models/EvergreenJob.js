const mongoose = require("mongoose");

const evergreenJobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    icon: {
        type: String,
        required: true // e.g. "Brain", "Database", "Shield"
    },
    color: {
        type: String,
        required: true // e.g. "#8b5cf6"
    },
    roadmap: {
        type: [String],
        default: []
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("EvergreenJob", evergreenJobSchema);
