const btnAbrirModal = document.getElementById('btnAbrirModal');
const modal = document.getElementById('modal');
const cerrarModal = document.getElementById('cerrarModal');

btnAbrirModal.addEventListener('click', () => {
    modal.style.display = 'block';
});

cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
