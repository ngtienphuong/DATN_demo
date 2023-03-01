import db from "../models";

export const addOrderDetail = (body) => new Promise(async(resolve, reject) => {
    try {
        const data = await db.Order.findOne({
            order:[['createdAt', 'DESC']]
        })
        var check = 1
        if(body.quantity < 1 || body.quantity > 5){
            check = 0
        }
        else{
            await db.OrderDetail.create({
            orderID: data.id,
            ...body
        })
        }
        resolve({
            err: check? 0: 1,
            mes: check? '' : 'Sản phẩm có số lượng bé hơn 1 hoặc lớn hơn 5 sẽ không được thêm vào đơn hàng'
        })
    } catch (error) {
        reject(error);
    }
})