const titleRef = document.getElementById("title");

console.log(titleRef);

const itemsRef = document.getElementsByClassName("item");

console.log(itemsRef);

const altTitleRef = document.querySelector("#title");

console.log(altTitleRef);

const itemsAltRef = document.querySelectorAll(".item");

console.log(itemsAltRef);

console.log(titleRef.innerHTML);

const ulRef = document.querySelector("body > ul");

console.log(ulRef.innerHTML);

ulRef.innerHTML = "";

const instruments = ["Piano", "Guitar", "Violin", "Drums", "Saxophone", "Flute" ];

for (let i = 0; i < instruments.length; i++) {
    const instrument = instruments[i];
        ulRef.innerHTML += "<li class='item' >" + instrument + "</li>";
}

document.querySelector("body > ul li").style.display = "none";

document.querySelector("body > ul li").style.display = "list-item";
