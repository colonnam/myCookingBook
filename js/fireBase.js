var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyAiyRMljy0eTklL09zD6b0w9G7IDlwQ1kg",
  authDomain: "mycookingbook-be6f2.firebaseapp.com",
  databaseURL: "https://mycookingbook-be6f2-default-rtdb.firebaseio.com",
  projectId: "mycookingbook-be6f2",
  storageBucket: "mycookingbook-be6f2.appspot.com",
  messagingSenderId: "958308320677"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


