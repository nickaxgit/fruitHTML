'use strict';

//https://javascript.info/strict-mode  or 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
//This program is written very naively - on purpose 
//There will be future excercises to improve the program design and structure

const prompt = require('prompt-sync')({sigint: true});

//Apple Banana Cherry Diamond

const distinctFruits=[] 

distinctFruits.push({name:'apple',toProbability:.23,prize:2})       //23%
distinctFruits.push({name:'banana',toProbability:.43,prize:4})      //20%
distinctFruits.push({name:'cherry',toProbability:.58,prize:6})      //15%
distinctFruits.push({name:'grapes',toProbability:.7,prize:10})       //12%
distinctFruits.push({name:'melon',toProbability:.81,prize:12})       //11%
distinctFruits.push({name:'pineapple',toProbability:.91,prize:18})   //10%
distinctFruits.push({name:'diamond',toProbability:1,prize:25})       //9%

const reels=[] //an array of reels - each *element* will contain an *array* of distinctFruit indices (just numbers)

const numReels=5
const reelLength=20

for (let i=0;i<numReels;i++){
    reels.push(buildReel(distinctFruits.length,reelLength))
}

let money = 100


let started=process.hrtime() //returns a [seconds][nanoseonds] tuple

while (money) {

    console.log('You have £' + money )
    prompt('Press enter to spin the wheels')    
    
    money --  //Pay £1 to play

    let winLine=[] //this will contain the output.. the names of the fruits on the 'win line' (one for each reel)
    
    for (let r=0;i<reels.length;r++){          
        let reelStoppedAt =  Math.floor(Math.random() * reel[r].length)
        winLine.push(distinctFruits[reel[r][reelStoppedAt]])  //this is hard...  the [][] part is getting from the 2D array (of reel,fruit)
    }
    
    console.log(winline.join(" ")) 

    if (reel1[p1]==reel2[p2] && reel2[p2]==reel3[p3]){
        console.log ('You win :o)')
        if (reel1[p1]=='Apple'){
            money = money + 2
            console.log ('£2')
        }
        else if (reel1[p1]=='Banana'){
            money = money + 3
            console.log ('£3')
        }
        else if (reel1[p1]=='Cherry'){
            money = money + 5
            console.log ('£5')
        }       
        else if (reel1[p1]=='Diamond'){
            money = money + 20
            console.log ('£20')
        }  
    }
    else{
        console.log('You lose :o(')
    }
}   

console.log ("You are out of money - gambling is a fools game") 

let took=process.hrtime(started)
console.log (took[0] +" seconds and " + took[1] /1e6 + " milliseconds")


function buildReel(fruits,length){
    //accepts an array of distinct fruits 
    //returns an array of length elements of random fruit indices

    let reel=[]
    for (let i=0;i<length;i++){
        let chosenFruit = Math.floor(Math.random() * fruits.length) 
        reel.push(chosenFruit)
    }    

    return reel

}