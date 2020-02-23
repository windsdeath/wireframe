var p1 = document.querySelector(".content_1 p")
var popup = document.querySelector(".popup")
var btn = document.querySelector("button")
function open (){
    popup.classList.add("pop");
}
function close (){
    popup.classList.remove("pop");
}
p1.addEventListener("click",open);
btn.addEventListener("click",close);