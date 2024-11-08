function toggleMenu(element) {
    // Fecha todos os dropdowns abertos
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
        if (dropdown.contains(element)) {
            // Abrir ou fechar o dropdown clicado
            dropdown.classList.toggle('show');
        } else {
            // Fechar os outros dropdowns
            dropdown.classList.remove('show');
        }
    });
}

// Fechar dropdown se clicar fora
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(function(dropdown) {
            dropdown.classList.remove('show');
        });
    }
}