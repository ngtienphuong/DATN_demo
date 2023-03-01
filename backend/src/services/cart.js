import db from '../models'

export const getCart = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Cart.findAll({
            where: {
                customerID: id
            },
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Got' : 'Cart not found',
            cartData: response,
            id: id
        })

    } catch (error) {
        reject(error)
    }
})

export const addCart = (id, body) => new Promise(async (resolve, reject) => {
    try {
        const product = await db.Product.findOne({
            where: {
                id: body.id
            }
        })
        const response = await db.Cart.findOrCreate({
            where: {
                productID: product.id,
                customerID: id
            },
            defaults: {
                customerID: id,
                productID: product.id,
                image: product.image,
                productName: product.name,
                unitPrice: product.price,
                totalPrice: product.price
            }
        })
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Added to cart' : 'Products already in the cart'
        })

    } catch (error) {
        reject(error)
    }
})

export const deleteCart = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Cart.destroy({
            where: {
                id: id.id
            }
        })
        resolve({
            err: response ? 0 : 1,
            mes: `${response} deleted`
        })

    } catch (error) {
        reject(error)
    }
})
export const deleteAllCart = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Cart.destroy({
            where: {
                customerID: id.id
            }
        })
        resolve({
            err: response ? 0 : 1,
            mes: `${response} deleted`
        })

    } catch (error) {
        reject(error)
    }
})

export const changeQuantityCart = (body) => new Promise(async (resolve, reject) => {
    try {
        const data = await db.Cart.findOne({
            where: {id: body.id},
            raw: true
        })
        
        var quantity
        if(body.act){
            quantity= data.quantity + 1
        }
        else{
            quantity= data.quantity - 1
        }
        const response = await db.Cart.update(
            {
                quantity: quantity
            },
            {
                where: {id: body.id}
            }
        )
        resolve({
            err: response? 0: 1,
            mes: response? 'update':""
        })
    } catch (error) {
        reject(error)
    }
})