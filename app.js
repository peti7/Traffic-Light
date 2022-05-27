'use strict';

const greenLight = document.querySelector(".green");
const yellowLight = document.querySelector(".yellow");
const redLight = document.querySelector(".red");

let green = 31;
let red = 31;
let yellow = 3;

window.addEventListener("load", () => {
    workingLights();
});

function workingLights(){
    let interval = setInterval(() => {
        green -= 1;
        if(green <= 0){
            yellow -= 1;
            if(yellow <= 0){
                red -= 1;
                if(red <= 0){
                    green = 31;
                    yellow = 3;
                    red = 31;
                    redLight.textContent = '';
                    redLight.style.backgroundColor = 'gray';
                    return;
                }
                redLight.textContent = red;
                redLight.style.backgroundColor = 'red';
                yellowLight.style.backgroundColor = 'gray';
                yellowLight.textContent = '';
                return;
            }
            yellowLight.textContent = yellow;
            yellowLight.style.backgroundColor = 'orange';
            greenLight.textContent = '';
            greenLight.style.backgroundColor = 'gray';
            return;
        }else{
            greenLight.style.backgroundColor = 'rgb(6, 185, 6)';
        }
        greenLight.textContent = green;
    }, 1000);
}