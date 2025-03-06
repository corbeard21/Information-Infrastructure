function attack(enemyDef) {
    const dmg =  this.atk - enemyDef;
if (dmg <= 0) {
    return 0;
} else {
    return dmg;
}
}

// Objects
const person = {
// Properties (variables that belong to this object)
name: "Corinne",
hp: 8,
def: 0,
atk: 2,
spd: 3,

// Methods (functions that belong to this object)

attack: attack,
takeDamage(damageAmount) {
    this.hp -= damageAmount;
}

attack(enemyDef) {
const dmg =  this.atk - enemyDef;
if (dmg <= 0) {
    return 0;
} else {
    return dmg;
}
}, 


};

function showHp() {
    console.log("HP:", this.hp);
}

const enemy = {
    name: "Slime",
    hp: 4,
    def: 3,
    atk: 1,
    spd: 1,

    attack() {
        return this.atk
    },

takeDamage(damageAmount) {
    this.hp -= damageAmount;
},
};

// Attacking Slime
const cnDmg = person.attack(enemy.def);
console.log(cnDmg);
console.log("Slime HP:", enemy.hp);


enemy.takeDamage(cnDmg);
console.log("Slime HP:", enemy.hp);

const characters = [
    {name: "Corinne", hp: 2, atk: 1}, {name: "Henry", hp: 4, atk: 7}, {name: "Susan", hp: 3, atk: 5}, {name: "Bob", hp: 3, atk: 6}
];

console.log("First Character:"), 
console