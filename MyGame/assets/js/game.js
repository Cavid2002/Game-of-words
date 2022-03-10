var words = ["apple","computer","car","house","dog","school","hobby","plane","cake","book"];
var dic = {
    "apple":"The type of fruit",
    "computer":"The programable machine",
    "house":"The place you live",
    "car": "The veichle",
    "dog": "The best friend of man",
    "school": "The place for education",
    "hobby":"Free time activity",
    "cake":"You eat it on birthday parties!",
    "plane":"The flying transport",
    "book":"Something you read",
}

var wrd;
var res;
var answer;


function gameStart(){
    let tip = document.querySelector(".tip");
    let hint = document.querySelector(".hint span");
    wrd = words[parseInt(Math.random()*words.length)];
    tip.textContent = dic[wrd];
    hint.textContent = wrd.length; 
}

function reseter(){
    res.textContent = " ";
    answer.value = ""
    gameStart(); 
}

function checker(event){
    event.preventDefault();
    answer = document.querySelector(".answer input");
    res = document.querySelector(".res");
    if(answer.value == wrd){
        res.textContent = "TRUE";
        res.style.color = "green";
    }
    else{
        res.textContent = "FALSE";
        res.style.color = "red";
    }
}

gameStart();
let check = document.querySelector(".sbmt");
let next = document.querySelector(".next");
check.onclick = checker;
next.onclick = reseter;