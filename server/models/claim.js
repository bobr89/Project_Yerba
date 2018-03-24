var mongoose = require('mongoose');

var claimSchema = new mongoose.Schema({
    memberId: {
        type: String,
        required: true
    },
    provider: {
        type: String,
        required: true
    },
    insurer: {
        type: String,
        required: true
    },
    procedureCode: {
        type: String,
        required: true
    },
    rateCode: {
        type: String,
        required: true
    },
    diagnosisCode: {
        type: String,
        required: true
    },
    isSettled: {
        type: Boolean,
        required: true
    }
});

var Claim = new mongoose.model("Claim", claimSchema);
module.exports = Claim;