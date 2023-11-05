// #! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
// import { type } from "os";

async function welcome() {
    let title = chalkAnimation.rainbow("let start Game:");
    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
    title.stop();
};
await welcome();

const players =await inquirer.prompt({
    type:"input",
    name:"name",
     message:"please enter your name  "

})

class player {
    name:string 
    fuel:number=100
    constructor(name:string){
        this.name = name  
    }
    fuelDeacrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }

    fuelincrease(){
        this.fuel = 100
    }
}


class Opponent {
    name:string
    fuel:number=100
    constructor(name:string){
        this.name = name  
    }
    fuelDeacrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }

    fuelincrease(){
        this.fuel = 100
    }
}

console.log(player.name)
let opponent = await inquirer.prompt({
    type:"list",
    name:"selection",
    message:"select your opponent",
    choices:["skeleton","Assassin","zombie"]

})
console.log(opponent.selection)

let p1 = new player(player.name)
let o1 = new Opponent(opponent.selection)

do{if (opponent.selection){
let ask = await inquirer.prompt({
    type:"list",
    name:"enter",
    message:"select your opponent",
    choices:["Attack","Run for your life . . ","Drink portion"]
    })

    if (ask.opt == "Attack"){
        let num = Math.floor(Math.random() * 2)
        if(num < 0){
            p1.fuelDeacrease()
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
            if(p1.fuel <= 0){
                console.log(chalk.bold.red.italic("you loost your better luck "))
            }
        }
        if(num <= 0){
            o1.fuelDeacrease()
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
            if(o1.fuel <= 0){
                console.log(chalk.bold.green(`you win ${p1.fuel }`))
                process.exit()
            }
        }
    }
    if (ask.opt == "Run for your life . ."){
        console.log(chalk.bold.red.italic("you loost your better luck "))
    }
    if (ask.opt == "Drink portion"){
        p1.fuelincrease()
        console.log(chalk.bold.green(`you drink Health portion your fuel is ${p1.fuel }`))
    }


}}
while(true)


