//this is for when the window loads, it should fire off immediately
window.addEventListener('load',init);


// console.error('this is new to me');
// console.warn('stay awayl from my farm');
let time = 8;
var score = 0;
let isPlaying;


//DOM ELEMENTS
let wordinput = document.querySelector('#word-input');
let currentWord = document.querySelector('#current-word');
let scoreDisplay = document.querySelector('#score');
let timedisplay = document.querySelector('#time');
let message = document.querySelector('#message');
let seconds = document.querySelector('#seconds');

const words =[
'wonderful',
'genesis',
'family',
'ambulance',
'incident',
'leviticus',
'deutronomy',
'exodus',
'fantastic',
'prevention',
'irregularity',
'numbers',
'nehemiah',
'chronicles',
'habakkuk',
'lamentations',
'hosea',
'improptu',
'commanding',
'forgiveness',
'daniel',
'ezekiel',
'kyagulanyi',
'balumi',
'wamanga',
'khainza',
'fire',
'favor',
'Joshua',
'Judges',
'Psalms',
'Ruth',
'Esther',
'Obadiah',
'Revelations',
'Timothy',
'Acts',
'Romans',
'corinthians',
'philipians',
'Galatians',
'Peter',
'John',
]; 
//initailize the game

function init(){
//load word from array
showWord(words);
//start matching on event
wordinput.addEventListener('input',startMatch);
setInterval(countdown,1000);

//check game status--see if the game is still being played
 setInterval(checkstatus,50);
}

function startMatch(){
    if(matchWords()){
        isPlaying= true;
        time= 8;
        showWord(words);
        wordinput.value = '';
        score+=10;
        
    }
    //We add a new score diplay and make an if statement for when the score is not -1
    if(score==-1){
        scoreDisplay.innerHTML = 0;
    }else{
        scoreDisplay.innerHTML = score;
    }
   
}

//match current words to input
function matchWords(){
    if(wordinput.value === currentWord.innerHTML) {
        message.innerHTML ='Correct';
        wordinput.style.border='2px solid green';
        
        return true;
    }else{
        message.innerHTML= '';
        
        return false; 
        
    }
}

function showWord(){
    //in this case we want to create a random index
    const randomIndex = Math.floor(Math.random() * words.length);
//THE CURRENT WORD IS SET TO RANDOM WORDS FORM THE ARRAY OF WORDS
    currentWord.innerHTML=words[randomIndex];
}


//counter timer
function countdown(){
    if(time>0) {
        time--;
    } else if(time === 0){
        isPlaying = false;
    }
//showtime   
timedisplay.innerHTML = time;
}

//check game status 
function checkstatus(){
    if(!isPlaying && time ===0){
        message.innerHTML ='Game Over!!!'
        wordinput.style.border = '2px solid red';
        score =-1;
    }
}