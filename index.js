const openNav = document.querySelector(".hamburger");
const closeNav = document.querySelector(".close");
const menu = document.querySelector(".menu");

const leftposition = menu.getBoundingClientRect().left;

openNav.addEventListener("click",() =>{ 
if(leftposition < 0){
    menu.classList.add("show");
}
});

closeNav.addEventListener("click", () => {
if(leftposition < 0){
    menu.classList.remove("show");
}

});