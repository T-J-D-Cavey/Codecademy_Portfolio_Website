// Script for both pages nav button

function toggleVisible () {
    document.getElementById("navvy").style.visibility = "visible";
    // this.classList.toggle('active');    
}
        
document.getElementById("btn1").addEventListener("click", toggleVisible); 

// Script for project buttons:

/*
function toggleVisibleProjectOne () {
    document.getElementById("card1").style.display = "block";
}
        
document.getElementById("project-btn-1").addEventListener("click", toggleVisibleProjectOne); 

function toggleVisibleProjectTwo () {
    document.getElementById("card2").style.display = "block";
}
        
document.getElementById("project-btn-2").addEventListener("click", toggleVisibleProjectTwo); 

function toggleVisibleProjectThree () {
    document.getElementById("card3").style.display = "block";
}
        
document.getElementById("project-btn-3").addEventListener("click", toggleVisibleProjectThree); 

*/

let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3"); 
let projectBtn1 = document.getElementById("project-btn-1")
let projectBtn2 = document.getElementById("project-btn-2")
let projectBtn3 = document.getElementById("project-btn-3")

projectBtn1.addEventListener('click', toggleDisplayBlock1);

projectBtn2.addEventListener('click', toggleDisplayBlock2);

projectBtn3.addEventListener('click', toggleDisplayBlock3);

function toggleDisplayBlock1 () {
if (card1.getAttribute('class')=='displayBlock') {
    card1.setAttribute('class', 'displayNone')
} else {
    card1.setAttribute('class', 'displayBlock')
}
};

function toggleDisplayBlock2 () {
    if (card2.getAttribute('class')=='displayBlock') {
        card2.setAttribute('class', 'displayNone')
    } else {
        card2.setAttribute('class', 'displayBlock')
    }
        
    }

function toggleDisplayBlock3 () {
if (card3.getAttribute('class')=='displayBlock') {
    card3.setAttribute('class', 'displayNone')
} else {
    card3.setAttribute('class', 'displayBlock')
}
    
}