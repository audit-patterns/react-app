import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCHzmqkbAij095wdPzKqdjfKoWQlTmriNg",
  authDomain: "audit-patterns.firebaseapp.com",
  projectId: "audit-patterns",
  storageBucket: "audit-patterns.appspot.com",
  messagingSenderId: "274873137129",
  appId: "1:274873137129:web:49a9b4a2d5f43afeab3d78"
}

firebase.initializeApp(firebaseConfig)

export default firebase
