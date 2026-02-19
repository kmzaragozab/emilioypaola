// ========== NAVBAR SCROLL TRIGGER ==========
const navbar = document.getElementById('navbar');
const menuOverlay = document.getElementById('menuOverlay');
const sidebarMenu = document.getElementById('sidebarMenu');
const hamburger = document.getElementById('hamburger');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Mostrar navbar después de 300px de scroll
    if (currentScroll > 300) {
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }
    
    lastScroll = currentScroll;
});

// ========== TOGGLE MENÚ ==========
function toggleMenu() {
    hamburger.classList.toggle('active');
    sidebarMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    
    // Prevenir scroll del body cuando el menú está abierto
    if (sidebarMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Click en hamburger
hamburger.addEventListener('click', toggleMenu);

// Click en overlay para cerrar
menuOverlay.addEventListener('click', toggleMenu);

// ========== SMOOTH SCROLL Y CERRAR MENÚ ==========
// Para el menú lateral (móvil)
document.querySelectorAll('.menu-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Cerrar menú
            toggleMenu();
            
            // Scroll suave a la sección
            setTimeout(() => {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 300); // Delay para que cierre el menú primero
        }
    });
});

// Para el menú horizontal (desktop)
document.querySelectorAll('.navbar-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Scroll suave a la sección
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
