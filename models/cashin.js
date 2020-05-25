const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cashinSchema = new Schema(
    {   
        invoiceNumber: {
        type: String,
        required: false
        },
        description: {
            type: String,
            required: true
        },
        amount: {
            type: String,
            required: true
        },
        currency: {
            type: String,
            required: true
        },
        bankAccount: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        }

    }, {
    timestamps: true
});
let Cashins = mongoose.model("Cashin", cashinSchema);
console.log(Cashins);
module.exports = { Cashins, cashinSchema };