console.log ("Objects are us");

const myObj = {};

const person = {
    // properties
    name: "Cornbread",
    age: 21,
    eyeColor: "brown",
    hairColor: "pink",
    skinColor: "tan",
    vision: "yes",
    canDevourSouls: true,

    // methods
    sayHello () {
        console.log ("Salutations my dearest enemy");
        console.log (person.name);
    }
};

console.log (person.name);



person.sayHello ();

function whatDoesTheFoxSay () {
    console.log ("Hatee-Hatee-Hatee-ho!");
}

whatDoesTheFoxSay();
