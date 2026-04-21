/* ============================================================
   eventos.js — búsqueda, filtros, ordenación y carrusel
   ============================================================ */

// --- CARRUSEL ---
function moveCarousel(trackId, direction) {
    const track = document.getElementById(trackId);
    if (!track) return;
    const slides = track.querySelectorAll('.carousel-slide');
    let current = parseInt(track.dataset.currentSlide) || 0;
    current = (current + direction + slides.length) % slides.length;
    track.dataset.currentSlide = current;
    track.style.transform = `translateX(-${current * 100}%)`;
}

// --- SEARCH & FILTER ---
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('ev-search');
    const filterBtns  = document.querySelectorAll('.ev-filter-btn');
    const sortSelect  = document.getElementById('ev-sort-select');
    const list        = document.getElementById('events-list');
    const noResults   = document.getElementById('ev-no-results');

    let activeFilter = 'all';

    function getCards() {
        return Array.from(list.querySelectorAll('.ev-card'));
    }

    function applyAll() {
        const query    = searchInput.value.trim().toLowerCase();
        const sortVal  = sortSelect.value;
        const cards    = getCards();

        // Filtrar
        let visible = cards.filter(card => {
            const tags     = (card.dataset.tags     || '').toLowerCase();
            const category = (card.dataset.category || '').toLowerCase();
            const text     = card.innerText.toLowerCase();

            const matchesCategory = activeFilter === 'all' || category === activeFilter;
            const matchesSearch   = !query || tags.includes(query) || text.includes(query);

            return matchesCategory && matchesSearch;
        });

        // Ordenar
        visible.sort((a, b) => {
            const da = new Date(a.dataset.date);
            const db = new Date(b.dataset.date);
            return sortVal === 'recent' ? db - da : da - db;
        });

        // Ocultar todos
        cards.forEach(c => {
            c.style.display = 'none';
            c.style.order   = '';
        });

        // Mostrar los visibles en orden
        visible.forEach((card, i) => {
            card.style.display = '';
            card.style.order   = i;
        });

        // Mensaje sin resultados
        noResults.style.display = visible.length === 0 ? 'block' : 'none';
    }

    // Botones de filtro
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.dataset.filter;
            applyAll();
        });
    });

    // Input de búsqueda
    searchInput.addEventListener('input', applyAll);

    // Selector de orden
    sortSelect.addEventListener('change', applyAll);

    // Orden inicial
    applyAll();
});