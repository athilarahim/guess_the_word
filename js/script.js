const wordsarray = ["whale","read","fly","mother","angle","hospital","cold","city","house","chair","atom","ship","stand","leaf","goat","crow"]
let randomIndex = Math.floor(Math.random() * wordsarray.length);
let word = wordsarray[randomIndex];
let guesslimit = 10;
var i = 0;
let flag = 0;
let correctcount = 0;

var guessed = document.querySelector(".word-in-progress");
for(var j=0;j<word.length;j++){
    guessed.innerHTML+= `<span id="ltr-${j}">_</span>`
}
    

var remaining = document.querySelector(".remaining");
remaining.innerHTML="You have "+ guesslimit +" guesses in total";

const GuessWord = (e) =>{
    e.preventDefault();
     var enteredletter = document.getElementById("letter").value;
     if(enteredletter!=""){
     var guessedletters = document.querySelector(".guessed-letters");
     guessedletters.innerHTML+=
     `<li>${enteredletter}</li>`
     console.log(enteredletter);
     for(i=0;i<word.length;i++){
        if(guesslimit>=1){ 
        if(enteredletter==word[i]){
            document.getElementById("ltr-"+i).innerHTML = word[i];
            flag=1;
            correctcount++;
            break;          
        }        
       }
        else{
            document.getElementById("remaining").style.color="red";
            var remaining = document.querySelector(".remaining");
            remaining.innerHTML="OOPS☹️! All your guesses are over";
            break;
        }
    }
    if((i==word.length && flag==0) || flag==1){
        guesslimit=guesslimit-1;
        var remaining = document.querySelector(".remaining");
        remaining.innerHTML="You have " + guesslimit + " guess remaining";
        flag=0;
    }

    document.querySelector("form").reset();
    if(correctcount==word.length){
        var remaining = document.querySelector(".remaining");
        remaining.style.color="green";
        remaining.innerHTML="Hurray🤩! You Won🎉";
         
    }
    }
}

    document.querySelector('form').addEventListener('submit', GuessWord)
