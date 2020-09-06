import { db } from './db.js'
export default {
  async index() {
    return await db
      .collection('products')
      .get()
      .then((querySnapshot) => {
        let products = querySnapshot.docs.map((doc) => doc.data())
        products = products.map((element, index) => ({
          id: index,
          ...element,
          isAddedToCart: false,
          isAddedBtn: false,
          isFavourite: false,
          quantity: 1,
        }))
        // eslint-disable-next-line
        console.log('called', products)
        return products
      })
  },
}
