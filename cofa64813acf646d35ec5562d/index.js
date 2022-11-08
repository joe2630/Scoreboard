
let countHome = 0;
let countGuest = 0;
let score = document.getElementById("ChangeScore")  ;
let guest = document.getElementById("chaneGuestScore") 


function plusOne(){
   score.textContent = countHome +=1 ;
}

function plusTwo(){
    score.textContent = countHome +=2 ;
}

function plusThree(){
    score.textContent = countHome +=3 ;
}

function guestPlusOne(){
   guest.textContent = countGuest +=1 ;
}

function guestPlusTwo(){
    guest.textContent = countGuest +=2 ;
}

function guestPlusThree(){
   guest.textContent = countGuest +=3 ;
};

function startAgain(){
    score.textContent = countHome = 0 ;
    guest.textContent = countGuest = 0;
}
