
// Create a function which counts and displays the number of times a button has been clicked.

var count = 0;
var button = document.getElementById('button');

button.addEventListener("click",()=>{
    button.textContent = 'Clicked ' + ++count ;
})


// Create a function to convert rands into dollars, euros and pounds.

var convertButton = document.getElementById("convert");
var randValue = document.getElementById("rands");
var dollarsValue = document.getElementById("dollars");
var eurosValue = document.getElementById("euros");
var poundsValue = document.getElementById("pounds");

convertButton.addEventListener("click", ()=>{
    dollarsValue.innerText = "The value in dollars " + (randValue.value*0.067).toFixed(2);
    eurosValue.innerText = "The value in euros " + (randValue.value*0.057).toFixed(2);
    poundsValue.innerText = "The value in pounds " + (randValue.value*0.049).toFixed(2);
})

// Create a function which creates a drop-down menu with 25 option elements.
var elements = document.getElementById("elements");
for (var i=0; i<25; i++) {
    var option = document.createElement("option");
    option.innerHTML = i+1;
    elements.appendChild(option);

} 
