import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCrEx7hzh6EpvFmHhRb_lvCLGX6USn07IM',
  authDomain: 'todo-ninja-89e42.firebaseapp.com',
  databaseURL: 'https://todo-ninja-89e42.firebaseio.com',
  projectId: 'todo-ninja-89e42',
  storageBucket: 'todo-ninja-89e42.appspot.com',
  messagingSenderId: '661431751358'
}
firebase.initializeApp(config)
const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true })

export default db
