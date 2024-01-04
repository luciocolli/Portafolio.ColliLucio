
function cerrarMenu() {
    var checkbox = document.getElementById('check');
    checkbox.checked = false;
}

function bajarASeccion(seccionId){
    let seccion = document.querySelector(seccionId);
    if (seccion) {
        seccion.scrollIntoView({ behavior: 'smooth' });
    }
}
