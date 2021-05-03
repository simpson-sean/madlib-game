



/* 
User Inputs
*/
const inputPlace1 = document.getElementById("pl1")
const inputProperNoun1 = document.getElementById("pn1")
const inputNoun1 = document.getElementById("n1")
const inputAdj1 = document.getElementById("ad1")
const inputProperNoun2 = document.getElementById("pn2")
const inputAdj2 = document.getElementById("ad2")
const inputNoun2 = document.getElementById("n2")
const inputNoun3 = document.getElementById("n3")
const inputProperNoun3 = document.getElementById("pn3")
const inputVerb1 = document.getElementById("v1")
const inputVerb2 = document.getElementById("v2")
const button = document.getElementById("button1")

/* 
Outputs
*/

const outputPlace1 = document.getElementById('place1')
const outputProperNoun1 = document.getElementById("pnoun1")
const outputNoun1 = document.getElementById("noun1")
const outputAdj1 = document.getElementById("adjective1")
const outputProperNoun2 = document.getElementById("pnoun2")
const outputAdj2 = document.getElementById("adjective2")
const outputNoun2 = document.getElementById("noun2")
const outputNoun3 = document.getElementById("noun3")
const outputProperNoun3 = document.getElementById("pnoun3")
const outputVerb1 = document.getElementById("verb1")
const outputVerb2 = document.getElementById("verb2")
const resetButton = document.getElementById("button2")

////////////////////////////////////////// -----------------------------/////////////////////////////////////////////

const sectionsContainer  = document.getElementById("sectionsContainer")
const userInput = document.getElementById("userInput")
// const mySection = document.getElementsByClassName("section")


// This button  injects user inputs into madlib, hide user inputs and shows madlib content. 

button.addEventListener("click", () => {
    // this section is to inject all the user inputs
    outputPlace1.textContent = inputPlace1.value
     outputProperNoun1.textContent = inputProperNoun1.value
     outputNoun1.textContent = inputNoun1.value
     outputAdj1.textContent = inputAdj1.value
     outputProperNoun2.textContent = inputProperNoun2.value
     outputAdj2.textContent = inputAdj2.value
     outputNoun2.textContent = inputNoun2.value
     outputNoun3.textContent = inputNoun3.value
     outputProperNoun3.textContent = inputProperNoun3.value
     outputVerb1.textContent = inputVerb1.value
     outputVerb2.textContent = inputVerb2.value

    
    // this section is to hide input area 
    userInput.classList.toggle("section")
    // this section to is show madlib
     sectionsContainer.classList.toggle("section")
})


resetButton.addEventListener('click', () => {
    // this reset the madlib

    // fix the userInput by selecting the userInput
    userInput.classList.toggle("section")
    sectionsContainer.classList.toggle("section")
})


