import  firebase  from "firebase/app";
import 'firebase/database';
import 'firebase/auth';



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIB0fQZ1h_9dIJCZWib79Vtj_MPZfavao",
  authDomain: "appredepc-01.firebaseapp.com",
  databaseURL: "https://appredepc-01-default-rtdb.firebaseio.com",
  projectId: "appredepc-01",
  storageBucket: "appredepc-01.appspot.com",
  messagingSenderId: "50759359087",
  appId: "1:50759359087:web:7f29a90b4fad1050d94b9a",
  measurementId: "G-Q24C9ELWFN"
};

 if(!firebase.app.length){

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


}

export default firebase;