const mobileMenu = document.querySelector('.mobile-menu');
const darkModeButton = document.querySelector('.dark-mode-button');
const body = document.querySelector('body');

//AL CARGAR EL DOCUMENTO
document.addEventListener('DOMContentLoaded', () => {
   eventListeners();
});

//ASIGNACIÓN DE EVENTOS A LOS ELEMENTOS
function eventListeners() {
    mobileMenu.addEventListener('click', mostrarMenu);
    darkModeButton.addEventListener('click', darkModeClick);
    darkModeAuto();

}


function mostrarMenu() {
    document.querySelector('.navegacion').classList.toggle('mostrar');
}

//ACTIVA EL MODO OSCURO AL DAR CLICK EN EL ICONO
function darkModeClick() {
    body.classList.toggle('dark-mode-settings');
}


//ACTIVA EL MODO OSCURO EN BASE A LAS PREFERENCIAS DEL SISTEMA
function darkModeAuto() {
    const preferencia = window.matchMedia('(prefers-color-scheme: dark)');
    //CAMBIA LA ENTRAR A LA PÁGINA
    preferencia.matches ?  body.classList.add('dark-mode-settings') :   body.classList.remove('dark-mode-settings');
    //CAMBIA DE MANERA AUTOMÁTICA AL AJUSTAR LAS PREFERENCIAS DEL SISTEMA SIN NECESIDAD DE RECARGAR
    preferencia.addEventListener('change', () => {
        preferencia.matches ? body.classList.add('dark-mode-settings') :   body.classList.remove('dark-mode-settings');
    })


}