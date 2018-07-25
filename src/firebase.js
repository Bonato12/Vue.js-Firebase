import Firebase from 'firebase'
 let config = {
	  apiKey: "AIzaSyBC8EBTXM3QJTpAM4Aoip4v_Vmww7JynL8",
     authDomain: "garin-177b1.firebaseapp.com",
     databaseURL: "https://garin-177b1.firebaseio.com",
     projectId: "garin-177b1",
     storageBucket: "garin-177b1.appspot.com",
     messagingSenderId: "959635452862"
    
  };
let app = Firebase.initializeApp(config)
export const db = app.database()
