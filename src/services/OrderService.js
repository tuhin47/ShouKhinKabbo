import { db } from './db.js'
const orderRef = db.collection('orders')
export default {
  async placeOrder(info, orders) {
    const orderProducts = []
    orders.forEach((item) => {
      orderProducts.push({
        id: item.id,
        quantity: item.quantity,
        base_price: item.price,
      })
    })
    const order = {
      customer_name: info.name || null,
      mobile: info.mobile || null,
      products: orderProducts,
      mail: info.mail || null,
      payment_method: info.payment_method || null,
      address: info.address || null,
      total: info.total || null,
      comment: info.comment || null,
    }
    return await orderRef.add({ order })
  },
}
