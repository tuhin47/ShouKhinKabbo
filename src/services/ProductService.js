import { db } from './db.js'
export default {
  async index() {
    return await db
      .collection('products')
      .get()
      .then((querySnapshot) => {
        let products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        products = products.map((element) => ({
          ...element,
          isAddedToCart: false,
          isAddedBtn: false,
          isFavourite: false,
          image_url: tprocessImageUrl(element.image_url),
          quantity: 1,
        }))
        // eslint-disable-next-line
        console.log('called', products)
        return products
      })
  },
}

const imageFormat = 'tr:w-640,h-480'
const tprocessImageUrl = function(url) {
  if (url && url.includes('https://ik.imagekit.io/')) {
    const arr = url.split('/')
    arr.splice(4, 0, imageFormat)
    return arr.join('/')
  }
  return url
}
