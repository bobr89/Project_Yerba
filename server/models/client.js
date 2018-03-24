var mongoose = require("mongoose");

var clientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    memberId: {
        type: String,
        unique: true,
        required: true,
    },
    claims: [{
        unique: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Claim'
    }],

});

var Client = mongoose.model("Client", clientSchema);
module.exports = Client;
