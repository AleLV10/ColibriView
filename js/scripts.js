/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener("DOMContentLoaded", function() {
    const btnMediaFidelidad = document.getElementById("btnMediaFidelidad");
    const mediaFidelidadSection = document.getElementById("mediaFidelidadSection");
    const btnVersion1 = document.getElementById("btnVersion1");
    const version1Section = document.getElementById("version1Section");
    const btnVersion2 = document.getElementById("btnVersion2");
    const version2Section = document.getElementById("version2Section");
    const btnVersion3 = document.getElementById("btnVersion3");
    const version3Section = document.getElementById("version3Section");

    btnMediaFidelidad.addEventListener("click", function() {
        // Mostrar la sección del prototipo de media fidelidad
        mediaFidelidadSection.classList.toggle("show");
        // Ocultar la sección de la versión 1.0 si está visible
        if (version1Section.classList.contains("show")) {
            version1Section.classList.remove("show");
        }
        if (version2Section.classList.contains("show")) {
            version2Section.classList.remove("show");
        }
        if (version3Section.classList.contains("show")) {
            version3Section.classList.remove("show");
        }
    });

    btnVersion1.addEventListener("click", function() {
        // Mostrar la sección de la versión 1.0
        version1Section.classList.toggle("show");
        // Ocultar la sección del prototipo de media fidelidad si está visible
        if (mediaFidelidadSection.classList.contains("show")) {
            mediaFidelidadSection.classList.remove("show");
        }
        if (version2Section.classList.contains("show")) {
            version2Section.classList.remove("show");
        }
        if (version3Section.classList.contains("show")) {
            version3Section.classList.remove("show");
        }
    });

    btnVersion2.addEventListener("click", function() {
        // Mostrar la sección de la versión 2.0
        version2Section.classList.toggle("show");
        // Ocultar la sección del prototipo de media fidelidad si está visible
        if (mediaFidelidadSection.classList.contains("show")) {
            mediaFidelidadSection.classList.remove("show");
        }
        if (version1Section.classList.contains("show")) {
            version1Section.classList.remove("show");
        }
        if (version3Section.classList.contains("show")) {
            version3Section.classList.remove("show");
        }
    });
    btnVersion3.addEventListener("click", function() {
        // Mostrar la sección de la versión 2.0
        version3Section.classList.toggle("show");
        // Ocultar la sección del prototipo de media fidelidad si está visible
        if (mediaFidelidadSection.classList.contains("show")) {
            mediaFidelidadSection.classList.remove("show");
        }
        if (version1Section.classList.contains("show")) {
            version1Section.classList.remove("show");
        }
        if (version2Section.classList.contains("show")) {
            version2Section.classList.remove("show");
        }
    });
});
