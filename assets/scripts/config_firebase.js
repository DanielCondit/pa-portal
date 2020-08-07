//Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBTuSEihzq63X1gagewoeTrEIaMzQV2MyE",
    authDomain: "pa-portal-188.firebaseapp.com",
    databaseURL: "https://pa-portal-188.firebaseio.com/",
    projectId: "pa-portal-188",
    storageBucket: "pa-portal-188.appspot.com",
    messagingSenderId: "877270573995",
    appId: "1:877270573995:web:fb59dcd80124c786af28ee"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the database
const auth = firebase.auth();
const db = firebase.firestore();