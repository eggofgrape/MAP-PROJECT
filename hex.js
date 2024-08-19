const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
//hex decimal array for color code
const btn=document.getElementById('btn') 
//const: cannot be reassigned, redeclared
const color=document.querySelector(".color");

btn.addEventListener("click",function(){
let hexColor="#"; //need 6 loops for 6 colorcode. 
for(let i=0;i<6;i++){
    hexColor += hex[getRandomNumber()];
}
color.textContent=hexColor;
document.body.style.backgroundColor=hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() *hex.length);
}//times hex's array length
