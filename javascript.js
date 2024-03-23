let divImage = document.getElementById("photoGallery");

let imgElem = document.createElement("img");

imgElem.src = "./images/image.png";
divImage.appendChild(imgElem);

let delButton = document.createElement("button");
delButton.innerText = "delete";

divImage.appendChild(delButton);

delButton.addEventListener("click", function(){
    imgElem.remove();
    delButton.remove();
})


let zoomin = document.createElement("button");
zoomin.innerText = " + ";
let zoomout= document.createElement("button");
zoomout.innerText = " - ";

divImage.appendChild(zoomin);

divImage.appendChild(zoomout);


const scaleFactor = 1.5;

zoomin.addEventListener("click", function(){
    imgElem.width *= scaleFactor;
    imgElem.height *= scaleFactor;
})

zoomout.addEventListener("click", function(){
    imgElem.width /= scaleFactor;
    imgElem.height /= scaleFactor;
    
})

