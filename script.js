document.getElementById('titulo Principal').innerText = 'Adiós';

// Cambiar el color de fuente de un encabezado a naranja con JS
document.querySelector('#rojo').style.color = 'orange';

// Agregar un encabezado en el que se pueda hacer clic y que cambie el color de la fuente a marrón con JS
const clickableHeader = document.createElement('h1');
clickableHeader.innerText = 'Clic aquí';
clickableHeader.addEventListener('click', function() {
    this.style.color = 'brown';
});
document.body.appendChild(clickableHeader);