const mongoose = require("mongoose");

const companyTopicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    domain: {
        type: String,
        required: true
    },
    topics: {
        type: mongoose.Schema.Types.Mixed, // Stores { Easy: [...], Medium: [...], Hard: [...] }
        default: {
            Easy: [],
            Medium: [],
            Hard: []
        }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("CompanyTopic", companyTopicSchema);
