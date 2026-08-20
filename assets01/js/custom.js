const btn = document.querySelector(".invoice-btn");
const menu = document.querySelector(".invoice-menu");

btn.onclick = function(e){
    e.stopPropagation();
    menu.style.display = menu.style.display === "block" ? "none" : "block";
};

document.onclick = function(){
    menu.style.display = "none";
};










