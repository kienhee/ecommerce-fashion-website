const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
    thumnail:String,
    name: String,
    listing: Number,
    price: Number,
    desc_Sm: String,
    desc_Lg: String,
    image: [],

}, { collection: 'Products' });

const Products = mongoose.model('Product', ProductSchema)
module.exports = Products;