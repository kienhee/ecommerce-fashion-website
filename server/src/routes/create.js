const express = require('express')
const Router = express.Router()
const createController = require('../controllers/createController');
const upload = require('../middlewares/multer')
Router.get('/create', createController.create)
Router.post('/create', upload.array('image',5), createController.post)

module.exports = Router;