//alert("Testing JS file");

//console.log("testing JS file 2")

//var button = document.getElementById("btn1");

function toggleVisible () {
    if (document.getElementById("navvy").style.visibility = "hidden") {
        document.getElementById("navvy").style.visibility = "visible";    
    } else {
        document.getElementById("navvy").style.visibility = "hidden";
    }
        
}
// back up version:
// function toggleVisible () {
    // document.getElementById("navvy").style.visibility = "visible";
    // document.getElementById("navvy").style.visibility = "hidden";
// }

function toggleHidden () {
    document.getElementById("navvy").style.visibility = "hidden";
}

document.getElementById("btn1").addEventListener("click", toggleVisible); 

