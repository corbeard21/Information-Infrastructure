
const titleRef = document.getElementById("gallery");

console.log(titleRef);

const itemsRef = document.getElementsByClassName("photo");

console.log(itemsRef);

const altTitleRef = document.querySelector("#gallery");

console.log(altTitleRef);

const itemsAltRef = document.querySelectorAll(".photo");

console.log(itemsAltRef);

console.log(titleRef.innerHTML);

const ulRef = document.querySelector("body > section");

console.log(ulRef.innerHTML);

ulRef.innerHTML = "";

const photos = [
    "https://fastly.picsum.photos/id/804/300/400.jpg?hmac=Y6cx9oentnw75-Q7gYdlaJBBAnSAlUHRYXbvFMIrZNI", "https://fastly.picsum.photos/id/185/300/400.jpg?hmac=7jvc9SGhArOCJhgLoOfYSTezJsc1xrIXhDOXkiZSrbs", "https://fastly.picsum.photos/id/229/300/400.jpg?hmac=CZOWn8sQ8oa9EfbMZw5tYqPMNKK0mNOYUsEgz81K8io", "https://fastly.picsum.photos/id/211/300/400.jpg?hmac=l0zi1AkBxaPoAMnWav0iWH8TsWfblHXdm_IGSNDMFWQ"
];

for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];
        ulRef.innerHTML += "<section img class='photo' >" + photo + "</section>";


}
