function Venchile(color,engine) {
    let maxSpeed = 70;
    let currentSpeed = 0;
    let isDrive = false;
    let timeoutIncrease = 2000;
    let timeoutDeacrease = 1500;

    this.color = function(){
        return color;
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
    }

    this.speedDecrease = function(){
        let oneSpeedUp = 20;
        currentSpeed -= oneSpeedUp;
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
    let startDrive = setTimeout(this.speedIncrease(),timeoutIncrease);
    let stopDrive = setTimeout(this.speedDecrease(),timeoutDeacrease);
    this.drive = function(){
        if(isDrive === true){
            console.log('Already driving');
        }else{
        isDrive = true;
        let overheatingSpeed = 30;
        setTimeout(this.speedIncrease(),timeoutIncrease);
        if (currentSpeed-maxSpeed >= overheatingSpeed){
            console.log('SLOW DOWN!')
        }
    }
    }
    this.stop = function(){
        isDrive = false;
        let maxSpeed = currentSpeed;
        clearInterval(startDrive);
        stopDrive();
        if(!currentSpeed || currentSpeed < 0){
        console.log(`Vehicle is stopped. Maximum speed during the drive was ${maxSpeed}`);
        }
    }

}
function Car(model,color,engine) {
    let currentSpeed = 0;
    let timeoutIncrease = 2000;
    let timeoutDeacrease = 1500;
    let isDrive = false;

    this._engine = engine;
    let maxSpeed = 80;

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
    }
    this.speedDecrease = function(){
        let oneSpeedUp = 20;
        currentSpeed -= oneSpeedUp;
    }
    let startDrive = setTimeout(this.speedIncrease(),timeoutIncrease);
    let stopDrive = setTimeout(this.speedDecrease(),timeoutDeacrease);
    this.currendSpeed = function(){
        return currentSpeed;
    }
    this.isDrive = function(){
        return isDrive;
    }
    this.drive = function(){
        if(isDrive){
            console.log('Already driving');
        }else{
        isDrive = true;
        let overheatingSpeed = 30;
        startDrive();
        if (currentSpeed-maxSpeed >= overheatingSpeed){
            console.log('Speed is too high. SLOW DOWN, please!')
        }
    }
    }
    this.stop = function(){
        isDrive = false;
        clearInterval(startDrive);
        let maxSpeed = currentSpeed;
        stopDrive();
        if(!currentSpeed || currentSpeed < 0){
        console.log(`Car ${this.model()} is stopped. Maximum speed during the drive was ${maxSpeed()}`);
        }
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
    }
    this.speedDecrease = function(){
        let oneSpeedUp = 20;
        currentSpeed -= oneSpeedUp;
        console.log(currentSpeed);
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
        let startDrive = setInterval(() => this.speedIncrease(), timeoutIcrease);
        let timeoutDeacrease = 1500;
        if(isDrive === true){
            console.log('Already driving');
        }else{
        isDrive = true;
        console.log(`Let's drive`);
        let overheatingSpeed = 30;
        if (currentSpeed-maxSpeed >= overheatingSpeed){
            console.log('Engine overheating');  
            setTimeout(() => { 
                clearInterval(startDrive);
                setInterval(() => this.speedDecrease(), timeoutDeacrease);
            }, timeoutIcrease);
            if(!currentSpeed || currentSpeed < 0){
                clearInterval(startDrive);
            }
        }
    }
    }
    this.stop = function(){

        isDrive = false;
        console.log(`Motorcycle is stopped. Good drive`);
    }
}

let venchile1 = new Venchile('green', 'EX-80');
let car = new Car('Ford Mustang', 'red', 'V8');
let motocycle = new Motocycle('Suzuki','green','MX-200');


let updEngine = 200;
venchile1.getInfo();
car.changeColor('red');
car.changeColor('yellow');
car.upgradeEngine('S8', updEngine);
car.getInfo();

motocycle.drive();




