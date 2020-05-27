function Venchile(color,engine) {
    let maxSpeed = 70;
    let currentSpeed = 0;
    let isDrive = false;
    let timeoutIncrease = 2000;
    let timeoutDeacrease = 1500;
    let startDrive;
    let stopDrive;
    let maxTrackSpeed;

    this.color = function(){
        return color;
    }

    this.engine = function(){
        return engine;
    }

    this.maxSpeed = function(){
        return maxSpeed;
    }

    this.upgradeEngine = function(newEngine, maxSpeed){
        this.engine = newEngine;
        this.maxSpeed = maxSpeed;
    }

    this.speedIncrease = function(){
        let oneSpeedUp = 20;
        currentSpeed += oneSpeedUp;
        console.log(currentSpeed);
        let overheatingSpeed = 30;
        if (currentSpeed-maxSpeed >= overheatingSpeed){
            console.log('Engine overheating');
            maxTrackSpeed = currentSpeed;
            this.stop();
        }
    }

    this.speedDecrease = function(){
        let oneSpeedUp = 20;
        currentSpeed -= oneSpeedUp;
        console.log(currentSpeed);
        if(currentSpeed <= 0){
            clearInterval(stopDrive);
            console.log(`Venchile is stopped. Maximum speed during the drive was ${maxTrackSpeed}`);
            isDrive = false;
        }
    }

    this.currendSpeed = function(){
        return currentSpeed;
    }

    this.isDrive = function(){
        return isDrive;
    }

    this.getInfo = function(){
        console.log(`Venchile's color:${this.color()}, engine:${this.engine()}, maxSpeed:${this.maxSpeed()}`)
    }

    this.drive = function(){
        startDrive = setInterval(() => this.speedIncrease(), timeoutIncrease);
        if(isDrive){
            console.log('Already driving');
        }else{
        isDrive = true;
        console.log(`Let's drive`);
        }
    }
    this.stop = function(){
        clearInterval(startDrive);
        stopDrive = setInterval(() => this.speedDecrease(), timeoutDeacrease);
    }

}
function Car(model,color,engine) {
    let currentSpeed = 0;
    let timeoutIcrease = 2000;
    let timeoutDeacrease = 1500;
    let isDrive = false;
    let startDrive;
    let stopDrive;
    this._engine = engine;
    let maxSpeed = 80;
    let maxTrackSpeed;


    this.color = function(){
        return color;
    }
    this.setColor = function(newColor){
        color = newColor;
        return newColor;
    }
    this.model = function(){
        return model;
    }
    this.engine = function(){
        return this._engine;
    }

    this.upgradeEngine = function(newEngine, maxSpeed) {
        if(!isDrive){
        this._engine = newEngine;
        this.maxSpeed = maxSpeed;
        }
    }

    this.getInfo = function(){
       console.log(`Car's color:${this.color()}, engine:${this.engine()},
        maxSpeed:${maxSpeed}, model:${this.model()}`);
    }

    this.speedIncrease = function(){
        let oneSpeedUp = 20;
        currentSpeed += oneSpeedUp;
        console.log(currentSpeed);
        let overheatingSpeed = 30;
        if (currentSpeed-maxSpeed >= overheatingSpeed){
            console.log('Engine overheating');
            maxTrackSpeed = currentSpeed;
            this.stop();
        }
    }

    this.speedDecrease = function(){
        let oneSpeedUp = 20;
        currentSpeed -= oneSpeedUp;
        console.log(currentSpeed);
        if(currentSpeed <= 0){
            clearInterval(stopDrive);
            console.log(`Car is stopped. Maximum speed during the drive was ${maxTrackSpeed}`);
            isDrive = false;
        }
    }
    this.currendSpeed = function(){
        return currentSpeed;
    }
    this.isDrive = function(){
        return isDrive;
    }
    this.drive = function(){
        startDrive = setInterval(() => this.speedIncrease(), timeoutIcrease);
        if(isDrive){
            console.log('Already driving');
        }else{
        isDrive = true;
        console.log(`Let's drive`);
        }
    }
    this.stop = function(){
        clearInterval(startDrive);
        stopDrive = setInterval(() => this.speedDecrease(), timeoutDeacrease);
    }
    this.changeColor = function(newColor){
        if(!isDrive){
        color = this.setColor(newColor);
        } else if (color === newColor){
            console.log('The selected color is the same as the previous, please choose another one');
        }
        return color;
    }
}
function Motocycle(model,color,engine) {
    let maxSpeed = 90;
    let currentSpeed = 0;
    let isDrive = false;
    let timeoutIcrease = 2000;
    let timeoutDeacrease = 1500;
    let startDrive;
    let stopDrive;

    this.color = function(){
        return color;
    }
    this.model = function(){
        return model;
    }
    this.engine = function(){
        return engine;
    }
    this.maxSpeed = function(){
        return maxSpeed;
    }
    this.upgradeEngine = function(newEngine, maxSpeed) {
        this.engine = newEngine;
        this.maxSpeed = maxSpeed;
    }
    this.speedIncrease = function(){
        let oneSpeedUp = 20;
        currentSpeed += oneSpeedUp;
        console.log(currentSpeed);
        let overheatingSpeed = 30;
        if (currentSpeed-maxSpeed >= overheatingSpeed){
            console.log('Engine overheating');
            this.stop();
        }
    }
    this.speedDecrease = function(){
        let oneSpeedUp = 20;
        currentSpeed -= oneSpeedUp;
        console.log(currentSpeed);
        if(currentSpeed <= 0){
            clearInterval(stopDrive);
            console.log(`Motorcycle is stopped. Good drive`);
            isDrive = false;
        }
    }
    this.currendSpeed = function(){
        return currentSpeed;
    }
    this.isDrive = function(){
        return isDrive;
    }
    this.getInfo = function(){
        console.log(`Motocycle's color:${this.color()}, engine:${this.engine()}, maxSpeed:${this.maxSpeed()}`);
    }
    this.drive = function(){
        startDrive = setInterval(() => this.speedIncrease(), timeoutIcrease);
        if(isDrive === true){
            console.log('Already driving');
        } else {
        isDrive = true;
        console.log(`Let's drive`);
        }
    }
    this.stop = function(){
        clearInterval(startDrive);
        stopDrive = setInterval(() => this.speedDecrease(), timeoutDeacrease);
    }
}


let venchile = new Venchile('green', 'EX-80');
let car = new Car('Ford Mustang', 'red', 'V8');
let motocycle = new Motocycle('Suzuki','green','MX-200');


let updEngine = 200;
venchile.getInfo();
car.changeColor('red');
car.changeColor('yellow');
car.upgradeEngine('S8', updEngine);
car.getInfo();
car.drive();

setTimeout(venchile.drive(),5000);

setTimeout(motocycle.drive(),4000);
