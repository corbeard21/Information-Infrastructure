const favoriteReptiles = ["Gecko", "Komodo Dragon", "Iguana"];

console.log(favoriteReptiles);
console.table(favoriteReptiles);

console.log("First thing", favoriteReptiles[0]);

console.log("idk", favoriteReptiles[1]);

console.log("# of favorite reptiles:", favoriteReptiles.length);

for (let i = 0; i < favoriteReptiles.length; i++) {
    const reptiles = favoriteReptiles[i];
console.log(reptiles);    
}

for(let i = favoriteReptiles.length - 1; i > -1; i--) {
    console.log("index:", i);
}

