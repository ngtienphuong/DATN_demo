import user from './user'
import auth from './auth'
import category from './category'
import subcategory from './subcategory'
import product from './product'
import cart from './cart'
import { notFound } from '../middlewares/handleError'
import insert from './insert'
import brand from './brand'
import order from './order'
import orderdetail from './orderdetail'

const Api = (app) => {
    app.use('/api/v1/user', user)
    app.use('/api/v1/auth', auth)
    app.use('/api/v1/category', category)
    app.use('/api/v1/subcategory', subcategory)
    app.use('/api/v1/product', product)
    app.use('/api/v1/cart', cart)
    app.use('/api/v1/insert', insert)
    app.use('/api/v1/brand', brand)
    app.use('/api/v1/order', order)
    app.use('/api/v1/orderdetail', orderdetail)

    app.use(notFound)
}

module.exports = Api