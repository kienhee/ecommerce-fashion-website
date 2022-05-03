const createRouter = require('./create')
const Routes = app => {
    app.use('/', createRouter)
    app.get('/', (req, res) => {
        res.send('hihi')
    })

}
module.exports = Routes;