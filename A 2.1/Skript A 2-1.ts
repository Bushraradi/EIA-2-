namespace Eventinspector {

window.addEventListener("load, handleLoad"): void{
function handleLoad (_event): void {
//*Event-Listener und Body key-up-Listener auf dem Body und den divs liegen
let body = document.body;
let div0 = document.getElementById ("div0");
let div0 = document.getElementById ("div1");

body.addEventListener ("click, logInfo");
div0.addEventListener ("click, logInfo");
div1.addEventListener ("click, logInfo"),

body.addEventListener ("keyup, logInfo");
div0.addEventListener ("keyup, logInfo");
div1.addEventListener ("keyup, logInfo");

document.addEventListener("click", logInfo);
document.addEventListener("mosemove", setInfoBox);
document.addEventListener("keyup", logInfo);

 }

function SetInfoBox (_event): void {
let x = _event.offsetX;
let y = _event.offsetY;
let target = _event.target;
let span = document.getElementById ("span");
span.innerHTML = mouseposition + target;
let mouseposition = "X: " + x + "px " + "Y: " + y + "px ";
span.style.left = x + "px";
span.style.top = y + "px";

}
function logInfo (_event): void {
console.log(_event);
console.log(_event.type);
console.log(_event.target);
console.log(_event.currenttTarget);

}


}