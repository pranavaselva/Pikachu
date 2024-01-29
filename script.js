/* Iteration 4: Make Everything Work */
// Pikachu - sky, ground, body, ears, cheeks, 
var sky = document.getElementById("sky");
var buttonsky = document.getElementById("buttonsky");
buttonsky.oninput = () => {
     sky.style.fill = buttonsky.value;
} 

var ground = document.getElementById("ground");
var buttonground = document.getElementById("buttonground");
buttonground.oninput = () => {
     ground.style.fill = buttonground.value;
} 

var body = document.getElementById("body");
var buttonbody = document.getElementById("buttonbody");
buttonbody.oninput = () => {
     body.style.fill = buttonbody.value;
} 

var ears = document.getElementById("ears");
var buttonears = document.getElementById("buttonears");
buttonears.oninput = () => {
     ears.style.fill = buttonears.value;
} 

var cheeks = document.getElementById("cheeks");
var buttoncheeks = document.getElementById("buttoncheeks");
buttoncheeks.oninput = () => {
     cheeks.style.fill = buttoncheeks.value;
} 