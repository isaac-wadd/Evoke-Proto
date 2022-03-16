/*!
* Start Bootstrap - Simple Sidebar v6.0.3 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {


    const charsLeftEl = document.getElementById('charsLeft');
    const answerText = document.getElementById('answerText');

    charsLeftEl.innerHTML = answerText.maxLength - answerText.value.length;
    answerText.oninput = () => {
        charsLeftEl.innerHTML = (answerText.maxLength - answerText.value.length);
    }

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    sidebarToggle.innerHTML = (document.body.classList.contains('sb-sidenav-toggled')) ? '&#10095' : '&#10096';

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            sidebarToggle.innerHTML = (document.body.classList.contains('sb-sidenav-toggled')) ? '&#10095' : '&#10096';
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});
