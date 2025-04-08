import { app } from "./app.js";

import {
  getFirestore,
  getDocs,
  collection,
  updateDoc,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const db = getFirestore(app);

const dreamCollection = collection(db, "hopesanddreams");

const dreamsRef = document.querySelector("#dreams");

async function getDreams(dreamCollection) {
  const dreamDocs = await getDocs(db, dreamCollection);

  dreamsRef.innerHTML = "";

  for (let i = 0; i < dreamDocs.docs.length; i++) {
    const currentDream = dreamDocs.docs[i];

    const data = currentDream.data();

    const newDiv = document.createElement("div");
    newDiv.innerHTML += ` <h4>${data.text || 0}</h4>
        <p>Likes:${data.hearts || 0}</p>`;

    //   creating DIV
    const dreamHTML = `<div class="dream">
        <h4>${data.text || 0}</h4>
        <p>Likes:${data.hearts}</p>
      </div>`;
    // creating P Tag
    const newPTag = document.createElement("p");

    //   creating edit button
    const newEditButton = document.createElement("button");
    newEditButton.innerHTML = "Edit";
    newEditButton.classList.add("edit");

    // creating heart button
    const newHeartButton = document.createElement("button");
    newHeartButton.classList.add("heart");
    newHeartButton.innerHTML = "&hearts;";
    newHeartButton.dataset.id = currentDream.id;
    newHeartButton.dataset.hearts = data.hearts || 0;
    newHeartButton.onclick = addHeart;

    // Adding elements through appendChild
    newPTag.appendChild(newEditButton);
    newPTag.appendChild(newHeartButton);
    newDiv.appendChild(newPTag);

    dreamsRef.appendChild(newDiv);
  }
}

async function addHeart(e) {
  console.log("Add Heart", e.target.dataset.id);

  const newHeartCount = Number(e.target.dataset.hearts) + 1;

  const dreamToUpdate = doc(dreamCollection, e.target.dataset.id);

  await updateDoc(dreamToUpdate, { hearts: newHeartCount });

  getDreams();
}
