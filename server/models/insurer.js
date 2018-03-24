var mongoose = require("mongoose");

var clientSchema = new mongoose.Schema({
    insurerId: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        unique: true,
        required: true
    },
    claims: [{
        unique: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Claim'
    }]
});

var Insurer = mongoose.model("Insurer", insurerSchema);
module.exports = Insurer;
