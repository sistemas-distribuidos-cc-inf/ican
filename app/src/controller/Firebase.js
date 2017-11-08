import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCI1tgkmUoDt6UsmnCBE5NHJIm28MSn8-8",
    authDomain: "ican-app.firebaseapp.com",
    databaseURL: "https://ican-app.firebaseio.com",
    projectId: "ican-app",
    storageBucket: "ican-app.appspot.com",
    messagingSenderId: "129462824669"
};
    firebase.initializeApp(config);

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
