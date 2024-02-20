
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

// Obtén el botón y el modal
var openModalBtn = document.getElementById("action-list-3");
var modal = document.getElementById("myModal");

// Cuando se hace clic en el botón, muestra el modal
openModalBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

// Cuando se hace clic en el botón de cerrar, cierra el modal
var closeButton = document.getElementsByClassName("close")[0];
closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});

// Obtener todos los inputs y sus respectivos labels
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    const label = input.previousElementSibling;
    if (input.value.trim() !== '') {
      label.classList.add('active');
    } else {
      label.classList.remove('active');
    }
  });
});
