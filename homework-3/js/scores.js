const titleRef = document.getElementById("average");

console.log(titleRef);

const itemsRef = document.getElementsByClassName("items");

console.log(itemsRef);

const altTitleRef = document.querySelector("#average");

console.log(altTitleRef);

const itemsAltRef = document.querySelectorAll(".items");

console.log(itemsAltRef);

const ulRef = document.querySelector("body > ul");

console.log(ulRef.innerHTML);

ulRef.innerHTML = "";

const scores = ["95", "72", "88", "45", "60", "79", "82", "91", "50", "38"];

for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    ulRef.innerHTML += "<li class='items' >" + scores + "</li>";
    
}

document.querySelector("body > ul li").style.display = "none";

document.querySelector("body > ul li").style.display = "list-item";

// 95
// 72
// 88
// 45
// 60
// 79
// 82
// 91
// 50
// 38