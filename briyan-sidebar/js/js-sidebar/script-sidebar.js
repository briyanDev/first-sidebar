/*
    By: Briyan Julio Torrez Vargas
*/

// ACTIVANDO TOGGLE MENU-EXPANDED & MENU-COLLAPSED
function toggleMenu(){
    var sideMenu = document.getElementById("sidemenu");
    var mainContent = document.getElementById("main-content");
    //activa menu-collapsed y desactiva menu-expanded al mismo tiempo por toogle
    sideMenu.classList.toggle("menu-collapsed");
    sideMenu.classList.toggle("menu-expanded");
    mainContent.classList.toggle("bloqueo-screen-active");
    mainContent.classList.toggle("bloqueo-screen");
}
function originMenu(){
    var sideMenu = document.getElementById("sidemenu");
    var mainContent = document.getElementById("main-content");
    
    sideMenu.classList.remove("menu-expanded");
    sideMenu.classList.add("menu-collapsed");
    
    mainContent.classList.remove("bloqueo-screen-active");
    mainContent.classList.add("bloqueo-screen");
}
/*window.addEventListener('load',function (){
    this.alert("Hello world");
});*/
