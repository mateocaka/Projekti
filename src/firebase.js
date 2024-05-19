// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJgnRzvUaS2a8kJmHkbQt7uYGQeroWlUk",
    authDomain: "projekt-b0f1e.firebaseapp.com",
    projectId: "projekt-b0f1e",
    storageBucket: "projekt-b0f1e.appspot.com",
    messagingSenderId: "206727917716",
    appId: "1:206727917716:web:6763ac3bddf99593018481",
    measurementId: "G-64X5JJ3Z41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;