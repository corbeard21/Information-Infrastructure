
const titleRef = document.getElementById("gallery");

console.log(titleRef);

const itemsRef = document.getElementsByClassName("item");

console.log(itemsRef);

const altTitleRef = document.querySelector("#gallery");

console.log(altTitleRef);

const itemsAltRef = document.querySelectorAll(".item");

console.log(itemsAltRef);

console.log(titleRef.innerHTML);

const ulRef = document.querySelector("body > ul");

console.log(ulRef.innerHTML);

ulRef.innerHTML = "";

const img = document.createElement("img");

img.src = "https://fastly.picsum.photos/id/804/300/400.jpg?hmac=Y6cx9oentnw75-Q7gYdlaJBBAnSAlUHRYXbvFMIrZNI";

img.alt = "First Image";


for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];
    ulRef.innerHTML += "<li class='item' >" + photo + "</li>";

    
}