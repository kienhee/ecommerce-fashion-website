const Products = require('../models/Products')
class createController {
    create = async (req, res, next) => {
        res.render('create')
    }
    post(req, res, next) {

        const { name, listing, price, desc_Sm, desc_Lg } = req.body
        const [image] = `images/${req.file.filename}`
        console.log(image);
        // Products.create({ name: name, listing: listing, price: price, desc_Sm: desc_Sm, desc_Lg: desc_Lg, image: [image] })
        //     .then(data => console.log(data))
        // res.send('hdiahi')
    }
}
module.exports = new createController;