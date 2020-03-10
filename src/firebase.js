import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3dxtDypPMMkifM2vLnd_PT5ZGRkc-Fzg",
    authDomain: "users-authentication-e5d61.firebaseapp.com",
    databaseURL: "https://users-authentication-e5d61.firebaseio.com",
    projectId: "users-authentication-e5d61",
    storageBucket: "users-authentication-e5d61.appspot.com",
    messagingSenderId: "101615029576",
    appId: "1:101615029576:web:d553b637136c1bf513777d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//list all of the auth providers for our app
export const providers = {
    google: new firebase.auth.GoogleAuthProvider()
}

export const firestore = firebase.firestore();

export default firebase;