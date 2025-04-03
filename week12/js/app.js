import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
{
  /* // TODO: Add SDKs for Firebase products that you want to use */
}
//firebase.google.com/docs/web/setup#available-libraries

https: {
  /* // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional */
}
const firebaseConfig = {
  apiKey: "AIzaSyC969NGFb6jbrIKjAi2Yglgh9zYpsWZRZY",
  authDomain: "corbeard-final-db.firebaseapp.com",
  projectId: "corbeard-final-db",
  storageBucket: "corbeard-final-db.firebasestorage.app",
  messagingSenderId: "326601221340",
  appId: "1:326601221340:web:5a06d690cda4f7e4e3c019",
  measurementId: "G-KD70Q23CXG",
};

//   Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
