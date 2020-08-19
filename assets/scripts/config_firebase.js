//Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyApjdNsx_V4AQgWeRxiZTnhUoC_v0dwHNA",
    authDomain: "https://pa-portal-d171a.firebaseapp.com",
    databaseURL: "https://pa-portal-d171a.firebaseio.com/Form_833/0ch9FE1FfHGiMsqPf0R5",
    projectId: "pa-portal-d171a",
    messagingSenderId: "472781469417",
    appId: "1:472781469417:web:061c7de9e636a3ee6ca278"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the database
const auth = firebase.auth();
const db = firebase.firestore();