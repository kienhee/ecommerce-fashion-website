const mongoose = require('mongoose');
const connect = () => {
    mongoose.connect(`mongodb+srv://kienhee:${process.env.PASSDB}@cluster0.tuuuw.mongodb.net/ecommerce-fashion?retryWrites=true&w=majority`)
    console.log("Connect successfully!");
}

module.exports = connect