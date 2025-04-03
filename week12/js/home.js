import { app } from "./app.js";
console.clear();
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const db = getFirestore(app);

const hadCollection = collection(db, "hopesanddreams");

const dreamsRef = document.querySelector("#dreams");

async function getHad() {
  const hadDocs = await getDocs(hadCollection);
  console.log("Hungry hippos");
  dreamsRef.innerHTML = "";
  for (let i = 0; i < hadDocs.docs.length; i++) {
    const currentDream = hadDocs.docs[i];
    console.log(currentDream.id, currentDream.data());

    const dreamData = currentDream.data();
    dreamsRef.innerHTML += "<li>" + dreamData.text + "</li>";
  }
}

getHad();
