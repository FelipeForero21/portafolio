document.addEventListener('DOMContentLoaded', () => {
    const btnAbrirModal = document.getElementById('btnAbrirModal');
    const modal = document.getElementById('modal');
    const cerrarModal = document.getElementById('cerrarModal');

    if (btnAbrirModal && modal && cerrarModal) {
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
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const btnAbrirModal = document.getElementById('btnAbrirModal');
    const modal = document.getElementById('modal');
    const cerrarModal = document.getElementById('cerrarModal');

    if (btnAbrirModal && modal && cerrarModal) {
        const tarjetas = document.querySelectorAll('.abrir-modal');
        tarjetas.forEach(tarjeta => {
            tarjeta.addEventListener('click', (event) => {
                event.preventDefault(); // Evita el comportamiento predeterminado del enlace
                const contenidoId = tarjeta.getAttribute('data-contenido');
                const contenidoModal = document.querySelector(contenidoId);
                if (contenidoModal) {
                    modal.innerHTML = contenidoModal.innerHTML;
                    modal.style.display = 'block';
                }
            });
        });

        cerrarModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});