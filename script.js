
// Manejar el evento de clic en el icono del menú hamburguesa
function handleMenuToggleClick(event) {
    event.stopPropagation(); // Detener la propagación del evento para evitar colisiones
    document.querySelector('.menu').classList.toggle('show');
}

document.querySelector('.menu-toggle').addEventListener('click', handleMenuToggleClick);

document.addEventListener('click', function(event) {
    if (!event.target.closest('.menu') && !event.target.closest('.menu-toggle')) {
        document.querySelector('.menu').classList.remove('show');
    }
});

document.querySelector('.close-menu').addEventListener('click', function() {
    document.querySelector('.menu').classList.remove('show');
});