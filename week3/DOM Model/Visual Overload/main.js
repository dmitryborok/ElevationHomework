"use strict";

const setRandomColor = function(obj) {
    obj.style.oldColor = getComputedStyle(obj).backgroundColor;
    obj.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
}

const restoreColor = function(obj) {
    if ("oldColor" in obj.style) {
        obj.style.backgroundColor = obj.style.oldColor;
    }
}

for (let r=0; r<=255; r+=100) {
    for (let g=0; g<=255; g+=100) {
        for (let b=0; b<=255; b+=100) {
            let box = document.createElement("div");
            box.setAttribute("class", "box");
            box.setAttribute("onmouseenter", "setRandomColor(this)");    
            box.setAttribute("onmouseleave", "restoreColor(this)");
            box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; 
            document.getElementById("container").appendChild(box);
        }
    }    
}

