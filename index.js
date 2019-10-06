var itemCounter = 1;
var ourList = document.querySelector("#our-list");
var ourButton = document.getElementById("our-button");
var listItems = document.querySelector("#our-list li");

var ourHeadline = document.getElementById("our-headline");

ourList.addEventListener('click', activatedItem);

function activatedItem(e){
    if(e.target.nodeName == 'LI'){
        ourHeadline.innerHTML = e.target.innerHTML;
        for(i = 0; i < e.target.parentNode.children.length; i++){
            e.target.parentNode.children[i].classList.remove("active");
        }
        e.target.classList.add("active");
    }
}

ourButton.addEventListener("click", creatNewItem);

function creatNewItem(){
    ourList.innerHTML += "<li>Somethign new " + itemCounter + "</li>"
    itemCounter++;
}