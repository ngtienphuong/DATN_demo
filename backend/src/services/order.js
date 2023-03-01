import db from "../models";
import { v4 as generateId} from 'uuid'

export const addOrder = (id, body) => new Promise(async(resolve, reject) => {
    try { 
        const orderId = generateId()
        await db.Order.create({
            id: orderId,
            customerID: id,
            deliveryAddress: body.deliveryAddress,
            totalPrice: body.totalPrice
        })
        body.carts.map(async item => {
            await db.OrderDetail.create({
                orderID: orderId,
                ...body
            })
        })
        resolve({
            err: 0,
            mes: 'Đặt hàng thành công'
        })
    } catch (error) {
        reject(error);
    }
})