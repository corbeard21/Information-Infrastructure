// Reference variables (referencing the DOM/HTML page)
const petsUlRef = document.querySelector("#pets");


// data variables
const pets = ["Cat", "Dog", "Bunny", "Ferret", "Raccoon", "Fish", "Bird", "Snake", "Horse"];

const images = ["https://picsum.photos/200", "https://picsum.photos/210", "https://picsum.photos/220", "https://picsum.photos/230", "https://picsum.photos/240", "https://picsum.photos/250", "https://picsum.photos/260", "https://picsum.photos/270", "https://picsum.photos/280", "https://picsum.photos/290"]

console.table(pets);

// Loop through our list
for (let i = 0; i < pets.length; i++) {
    const pet = pets[i];
    console.log(pet);

    const image = images[i];
    console.log(image);


    const imageHtml = "<img src='" + image + "'alt='' />";
    petsUlRef.innerHTML += "<li>" + pet + imageHtml + "</li>";
}
