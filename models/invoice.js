const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const invoiceSchema = new Schema(
    {   
        invoiceNumber: {
        type: String,
        required: true
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
        date: {
            type: Date,
            required: true
        }

    }, {
    timestamps: true
});
let Invoice = mongoose.model("Invoice", invoiceSchema);
console.log(Invoice);
module.exports = { Invoices, invoiceSchema };