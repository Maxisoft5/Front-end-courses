function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
class Fighter {
	constructor(prop) {
		this.getName = function(){
			return prop.name;
		}
		this.getDamage = function(){
			return prop.damage;
		}
		this.getStrenght = function(){
			return prop.strenght;
		}
		this.getAgility = function(){
			return prop.agility;
		}
		this._health = prop.hp;
		this._init_hp = prop.hp;
		this._loss = 0;
		this._win = 0;
	}
	getHealth() {
		return this._health;
	}
	attack(fighter) {
		const chance = 100 - fighter.getAgility() - fighter.getStrenght();
		const success = getRandomIntInclusive(0, 100);
		if (success <= chance) {
			fighter._health -= this.getDamage();
		if (fighter._health <= 0) {
			fighter._health = 0;
			this.addWin();
			fighter.addLoss();
		}
		return `${this.getName()} makes ${this.getDamage()} damage to ${fighter.getName()}`;
		} else {
			return `${fighter.getName()} attack missed`;
		}
	}
	heal(hp) {
		this._health += hp;
		if (this._health > this._init_hp) {
			this._health = this._init_hp;
		}
	}
	dealDamage(hp) {
		this._health -= hp;
		if (this._health <= 0) {
			this._health = 0;
			this.addLoss();
		}
	}
	addWin() {
		return ++this._win;
	}
	addLoss() {
		return ++this._loss;
	}
	logCombatHistory() {
		return `Name: ${this.getName()}, Wins: ${this._win}, Losses: ${this._loss}`;
	}
}
function battle(fighter1, fighter2) {
	if(comp(fighter1,fighter2)){
		return `${fighter1.getName()} can't fight with himself`;
	}
	if (fighter1.getHealth() === 0) {
		return `${fighter1.getName()} is dead and can't fight`; 
	}
	if (fighter2.getHealth() === 0) {
		return `${fighter2.getName()} is dead and can't fight`; 
	}
	const TRUE = true; 
	while (TRUE) {
		console.log(fighter1.attack(fighter2));
		if (fighter2.getHealth() === 0) {
			return `${fighter1.getName()} has won`; 
		}
		console.log(fighter2.attack(fighter1));
		if (fighter1.getHealth() === 0) {
			return `${fighter2.getName()} has won`; 
		}
	}
}
function comp(f1, f2){
	let isEqual = false;
	if(f1===f2) {
		isEqual = true; 
	}
	return isEqual;
}

const fighter1 = new Fighter({ name: 'F1', hp: 150, damage: 20, strenght: 15, agility: 10 });
const fighter2 = new Fighter({ name: 'F2', hp: 70, damage: 60, strenght: 10, agility: 10 });
