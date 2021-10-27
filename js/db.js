import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiyRMljy0eTklL09zD6b0w9G7IDlwQ1kg",
  authDomain: "mycookingbook-be6f2.firebaseapp.com",
  databaseURL: "https://mycookingbook-be6f2-default-rtdb.firebaseio.com",
  projectId: "mycookingbook-be6f2",
  storageBucket: "mycookingbook-be6f2.appspot.com",
  messagingSenderId: "958308320677",
  appId: "1:958308320677:web:5e9a071efbe479a48c144c",
  measurementId: "G-8PW5LB4942"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore();

const querySnapshot = await getDocs(collection(db, "recettes"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data().titre}`);

  var titre = document.createElement('div')
  titre.innerHTML=doc.data().titre
  titre.setAttribute("class","recipe-title")

  var ingredients=document.createElement('div')
  ingredients.innerHTML=doc.data().ingredients
  ingredients.setAttribute("class","recipe-ingredients")

  var details=document.createElement('div')
  details.appendChild(titre)
  details.appendChild(ingredients)
  details.setAttribute("class","recipe-details")

  var img=document.createElement('img')
  img.setAttribute("src","./img/dish.png")
  img.setAttribute("alt","recipe thumb")

  var recette=document.createElement('div')
  recette.appendChild(img)
  recette.appendChild(details)
  recette.setAttribute("class","card-panel recipe white row")

  document.querySelector(".recipes").appendChild(recette)  
  
})

