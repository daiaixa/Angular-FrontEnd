const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");


btnMenu.addEventListener("click", mostrarMenu);


function mostrarMenu() {
    menu.classList.toggle("mostrar");//que se le agregue una clase
};

const menuLinks = document.querySelectorAll (".menu a[href^='#']");
menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener("click", function(){
        menu.classList.remove("mostrar");
    })
})
