import db from '../models'
import products from '../../data/SupperMarket.json'
import brands from '../../data/brand.json'

export const insertProduct = () => new Promise(async (resolve, reject) => {
    try {
        const product = Object.entries(products)
        product.forEach( item=>{
            item[1]?.map(async product =>{
                await db.Product.create({
                    name:product.name,
                    price: +product.price,
                    subcat: +product.subcat,
                    image: product.image,
                    brand: product.brand,
                    expiry: product.expiry,
                    avaliable: product.avaliable,
                    description: product.description
                })
            })
        })
        resolve('OK')

    } catch (error) {
        reject(error)
    }
})

export const insertBrand = () => new Promise(async (resolve, reject) => {
    try {
        const brand = Object.entries(brands)
        brand.forEach( item=>{
            item[1]?.map(async brand =>{
                await db.Brand.create({
                    name:brand.name,
                    image: brand.image
                })
            })
        })
        resolve('OK')

    } catch (error) {
        reject(error)
    }
})