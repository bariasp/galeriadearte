document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll("section");

    function showSection(sectionId) {
        sections.forEach(function(section) {
            if (section.id === sectionId) {
                section.classList.remove("hidden");
            } else {
                section.classList.add("hidden");
            }
        });
    }

    window.addEventListener("hashchange", function() {
        var currentHash = window.location.hash.substring(1);
        showSection(currentHash);
    });

    // Mostrar la sección "Inicio" por defecto
    showSection("inicio");

    // Trigger hashchange event on page load
    window.dispatchEvent(new Event("hashchange"));
});
document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll("section");

    function showSection(sectionId) {
        sections.forEach(function(section) {
            if (section.id === sectionId) {
                section.classList.remove("hidden");
            } else {
                section.classList.add("hidden");
            }
        });
    }

    window.addEventListener("hashchange", function() {
        var currentHash = window.location.hash.substring(1);
        showSection(currentHash);
    });

    // Obtener el hash actual y mostrar la sección correspondiente
    var currentHash = window.location.hash.substring(1);
    if (currentHash === "") {
        showSection("inicio");
    } else {
        showSection(currentHash);
    }
});
