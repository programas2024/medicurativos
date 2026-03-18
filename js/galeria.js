// ===== GALERÍA DE IMÁGENES =====
console.log('🔥 galeria.js CARGADO');

const imagenesGaleria = [
    { id: 1, url: 'imagenes/ave.png', titulo: 'Momento de paz', cat: 'galeria' },
    { id: 2, url: 'imagenes/camalio.png', titulo: 'Crecimiento personal', cat: 'galeria' },
    { id: 3, url: 'imagenes/cerdo.png', titulo: 'Valores', cat: 'galeria' },
    { id: 4, url: 'imagenes/gatoperro.jpeg', titulo: 'Emociones', cat: 'galeria' },
    { id: 5, url: 'imagenes/gavilan.jpeg', titulo: 'Liderazgo', cat: 'galeria' },
    { id: 6, url: 'imagenes/koala.jpeg', titulo: 'Amistad', cat: 'galeria' },
    { id: 7, url: 'imagenes/pavo.jpeg', titulo: 'Superación', cat: 'galeria' },
    { id: 8, url: 'imagenes/pulpo.jpeg', titulo: 'Gratitud', cat: 'galeria' },
    { id: 9, url: 'imagenes/mono.jpeg', titulo: 'Esperanza', cat: 'galeria' },
    { id: 10, url: 'imagenes/mariquita.jpeg', titulo: 'Felicidad', cat: 'galeria' },
    { id: 11, url: 'imagenes/elefante.jpeg', titulo: 'Paz interior', cat: 'galeria' },
    { id: 12, url: 'imagenes/pato.jpeg', titulo: 'Motivación', cat: 'galeria' }
];

// ===== FUNCIÓN DE ZOOM =====
window.abrirImagenZoom = function(url, titulo) {
    Swal.fire({
        imageUrl: url,
        imageAlt: titulo,
        title: titulo,
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            popup: 'swal-popup-redondo'
        }
    });
};

// ===== FUNCIONES PARA MOSTRAR IMÁGENES =====
window.mostrarGaleriaCompleta = function() {
    Swal.close();
    let html = '<div class="galeria-grid">';
    imagenesGaleria.forEach(img => {
        html += `
            <div class="galeria-item" onclick="abrirImagenZoom('${img.url}', '${img.titulo}')">
                <img src="${img.url}" alt="${img.titulo}" loading="lazy">
                <div class="galeria-caption"><i class="fas fa-search-plus"></i> ${img.titulo}</div>
            </div>
        `;
    });
    html += '</div>';
    temaPrincipal.innerHTML = `
        <div class="galeria-container">
            <h2 class="galeria-titulo"><i class="fas fa-images"></i> Galería completa</h2>
            ${html}
        </div>
    `;
};

window.mostrarGaleriaDestacados = function() {
    Swal.close();
    const destacados = imagenesGaleria.slice(0, 4);
    let html = '<div class="galeria-grid">';
    destacados.forEach(img => {
        html += `
            <div class="galeria-item" onclick="abrirImagenZoom('${img.url}', '${img.titulo}')">
                <img src="${img.url}" alt="${img.titulo}" loading="lazy">
                <div class="galeria-caption"><i class="fas fa-search-plus"></i> ${img.titulo}</div>
            </div>
        `;
    });
    html += '</div>';
    temaPrincipal.innerHTML = `
        <div class="galeria-container">
            <h2 class="galeria-titulo"><i class="fas fa-star"></i> Destacados</h2>
            ${html}
        </div>
    `;
};

window.mostrarGaleriaRecientes = function() {
    Swal.close();
    const recientes = imagenesGaleria.slice(-4);
    let html = '<div class="galeria-grid">';
    recientes.forEach(img => {
        html += `
            <div class="galeria-item" onclick="abrirImagenZoom('${img.url}', '${img.titulo}')">
                <img src="${img.url}" alt="${img.titulo}" loading="lazy">
                <div class="galeria-caption"><i class="fas fa-search-plus"></i> ${img.titulo}</div>
            </div>
        `;
    });
    html += '</div>';
    temaPrincipal.innerHTML = `
        <div class="galeria-container">
            <h2 class="galeria-titulo"><i class="fas fa-clock"></i> Recientes</h2>
            ${html}
        </div>
    `;
};

// ===== FUNCIÓN PRINCIPAL (SOLO PARA MÓVIL) =====
window.mostrarGaleria = function() {
    console.log('📱 Abriendo galería en móvil');
    
    // Cerrar menú hamburguesa
    const menuHamburguesa = document.getElementById('menuCategoriasMovil');
    const overlay = document.querySelector('.categorias-overlay');
    if (menuHamburguesa) {
        menuHamburguesa.classList.remove('mostrar');
        if (overlay) overlay.classList.remove('mostrar');
        document.body.style.overflow = '';
    }
    
    // SweetAlert con 3 botones MORADOS
    Swal.fire({
        title: '<span style="font-size: 24px; color: #2c1b4e;">📸 Galería</span>',
        html: `
            <div style="display: flex; flex-direction: column; gap: 12px;">
                <button class="galeria-btn" id="btnCompleta" 
                    style="background: white; color: #9b59b6; border: 3px solid #9b59b6; border-radius: 60px; padding: 16px; font-size: 18px; font-weight: 600; display: flex; align-items: center; gap: 10px; width: 100%;">
                    <i class="fas fa-images"></i> Ver galería completa
                </button>
                <button class="galeria-btn" id="btnDestacados" 
                    style="background: white; color: #9b59b6; border: 3px solid #9b59b6; border-radius: 60px; padding: 16px; font-size: 18px; font-weight: 600; display: flex; align-items: center; gap: 10px; width: 100%;">
                    <i class="fas fa-star"></i> Ver destacados
                </button>
                <button class="galeria-btn" id="btnRecientes" 
                    style="background: white; color: #9b59b6; border: 3px solid #9b59b6; border-radius: 60px; padding: 16px; font-size: 18px; font-weight: 600; display: flex; align-items: center; gap: 10px; width: 100%;">
                    <i class="fas fa-clock"></i> Ver recientes
                </button>
            </div>
        `,
        showCloseButton: true,
        showConfirmButton: false,
        customClass: { popup: 'swal-popup-galeria' },
        didOpen: () => {
            document.getElementById('btnCompleta').onclick = window.mostrarGaleriaCompleta;
            document.getElementById('btnDestacados').onclick = window.mostrarGaleriaDestacados;
            document.getElementById('btnRecientes').onclick = window.mostrarGaleriaRecientes;
        }
    });
};
// Asignar evento al botón de galería (solo por si acaso)
setInterval(function() {
    document.querySelectorAll('button').forEach(btn => {
        if (btn.textContent.includes('Galería') && !btn._tieneEvento) {
            console.log('🎯 Asignando evento a Galería');
            btn._tieneEvento = true;
            btn.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                window.mostrarGaleria();
                return false;
            };
        }
    });
}, 1000);