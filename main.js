// Script for both pages nav button

function toggleVisible () {
    document.getElementById("navvy").style.visibility = "visible";    
}
        
document.getElementById("btn1").addEventListener("click", toggleVisible); 

// Script for project buttons:


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
