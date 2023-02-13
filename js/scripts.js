
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    initMap()

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

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
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
    document.getElementById("submitButton").addEventListener('click', (e) => {
        sendEmail()
    })

});

function sendEmail() {

    // document.getElementById("submitButton").addEventListener('click', (e) => {
    //     e.preventDefault()
        const email = document.getElementById("email").value;
        // const subject = document.getElementById("subject").value;
        const body = document.getElementById("message").value;

        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "jjogante@gmail.com",
            Password : "4RC@HNrd@WUNTdp",
            To : 'cavalcantemat43@gmail.com',
            From : email,
            Subject : 'subject',
            Body : body
        }).then(
            message => {
                console.log(message)
            }
        );

    // })
}

function initMap() {
    const uluru = { lat:-23.003291599423576,lng: -46.84201 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: uluru,
    });
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;