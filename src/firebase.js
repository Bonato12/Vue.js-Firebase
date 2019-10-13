import Firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAZZZYNcR0nwdM0hTKcTrAuXD8xN1iql80",
  authDomain: "crud-f5421.firebaseapp.com",
  databaseURL: "https://crud-f5421.firebaseio.com",
  projectId: "crud-f5421",
  storageBucket: "crud-f5421.appspot.com",
  messagingSenderId: "136990994310",
  appId: "1:136990994310:web:b16388d9111de781624607"
};


let app = Firebase.initializeApp(config);
export const db = app.database();
