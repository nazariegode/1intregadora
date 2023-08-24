const userController = require('../users/user.controller')
const cartsController = require('../carts/carts.controller')
const productsController = require('../products/products.controller')

const router = app => {

    app.use('./user', userController)
    app.use('./carts', cartsController)
    app.use('./products', productsController)

}

module.exports = router