class Fighter {
    constructor(fighter){
        let wins = 0;
        let losses = 0;
        this._name = fighter.name;
        this._health = fighter.hp;
        this._damage = fighter.damage;
        this._strength = fighter.strength;
        this._agility = fighter.agility;
        this._wins = wins;
        this._losses = losses;
    }
    getName() {
        return this._name;
    }
    getDamage() {
        return this._damage;
    }
    getHealth() {
        return this._health;
    }
    get health(){
        return this._health;
    }
    set health(value) {
        this._health = value;
    }
    getStrength() {
        return this._strength;
    }
    getAgility () {
        return this._agility;
    }
    getWins() {
        return this._wins;
    }
    addWins () {
        return ++this._wins;
    }
    getLosses () {
        return this.losses;
    }
    addLosses () {
        return ++this.losses;
    }
    get wins() {
        return this._wins;
    }
    set wins(value) {
        this._wins = value;
    }
    get losses() {
        return this._losses;
    }
    set losses(value) {
        this._losses = value;
    }
    attack(fighter){
        if(fighter === this){
            return console.log(`no suicide pls'`);
        }
        let successPercent;
        let randomPercent = Math.round(Math.floor(Math.random() * 100) + 1);
        successPercent = Math.round(100 - (fighter.getStrength() * 50 / 60 + fighter.getAgility() * 50 / 40));
        if (fighter.health === 0){
            return console.log(`${fighter.getName()} has dead`);
        }
        if(successPercent < randomPercent && fighter.health !== 0){
            return console.log(`${this.getName()} attack missed`);
        }else{
            fighter.health -= this._damage;
            if (fighter.health === 0){
                console.log(`${this.getName()} makes ${this.getDamage()} damage to ${fighter.getName()}`);
                return console.log(`${fighter.getName()} has dead`);
            }
            return console.log(`${this.getName()} makes ${this.getDamage()} damage to ${fighter.getName()}`);
        }
    }
    logCombatHistory(){
        console.log(`Name: ${this.getName()}, Wins: ${this.getWins()}, Losses: ${this.getLosses()}`);
        }
    heal(healed) {
        this._health += healed;
        if (this._health > this.health){
            this._health = this.health;
            return this._health;
        }else{
            return this._health;
        }
    }
    dealDamage(damaged) {
        this._health -= damaged;
        if (this._health < 0){
            this._health = 0;
            return this._health;
        }else{
            return this._health;
        }
    }
}
function battle(fighter1,fighter2){
    for(;;){
        fighter1.attack(fighter2);
        if(fighter2.health === 0){
            console.log(`${fighter1.getName()} has won`);
            fighter2.addWins();
            fighter1.addLosses();
            break;
        }
        fighter2.attack(fighter1);
        if(fighter1.health === 0){
            console.log(`${fighter2.getName()} has won`);
            fighter1.addWins();
            fighter2.addLosses();
            break;
        }
    }
}
const fighter1 = new Fighter({name:'Maximus', damage: 25, hp: 100, strength: 30, agility: 25});
const fighter2 = new Fighter({name:'Comodus', damage: 20, hp: 100, strength: 25, agility: 20});
battle(fighter1,fighter2);