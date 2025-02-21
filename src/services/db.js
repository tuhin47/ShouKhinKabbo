import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
var firebaseConfig = {
  apiKey: `${process.env.VUE_APP_API_KEY}`,
  authDomain: `${process.env.VUE_APP_AUTH_DOMAIN}`,
  databaseURL: `${process.env.VUE_APP_DATABASE_URL}`,
  projectId: `${process.env.VUE_APP_PROJECT_ID}`,
  storageBucket: `${process.env.VUE_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.VUE_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.VUE_APP_APP_ID}`,
  measurementId: `${process.env.VUE_APP_MEASUREMENT_ID}`,
}

export const db = firebase.initializeApp(firebaseConfig).firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }
