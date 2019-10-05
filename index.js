var itemCounter = 1
var ourList = document.getElementById("our-list")
var ourButton = document.getElementById("our-button")
var listItems = document.getElementById("our-list").getElementsByTagName("li")

var ourHeadline = document.getElementById("our-headline");

// for(var i = 0; i < listItems.length; i++){
//     listItems[i].innerHTML = "Hello world !";
// }

for(let i = 0; i < listItems.length; i++){
    listItems[i].addEventListener("click", activatedItem)
}

function activatedItem(){
    ourHeadline.innerHTML = this.innerHTML;
    for(let i = 0; i < listItems.length; i++){
        listItems[i].classList.remove("active")
    }
    this.classList.add("active")
}

ourButton.addEventListener("click", creatNewItem)

function creatNewItem(){
    ourList.innerHTML += "<li>Somethign new " + itemCounter + "</li>"
    itemCounter++
}