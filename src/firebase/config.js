import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAt4A937Fy_z2vMDO5AJn9ST_1ULv0ktRs",
    authDomain: "petapp-bf2f5.firebaseapp.com",
    databaseURL: "https://petapp-bf2f5-default-rtdb.firebaseio.com",
    projectId: "petapp-bf2f5",
    storageBucket: "petapp-bf2f5.appspot.com",
    messagingSenderId: "867099045264",
    appId: "1:867099045264:web:eba9a6ec77eee4bd62d715",
    measurementId: "G-8SBFXJPVHW"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };