/*!
* Start Bootstrap - Simple Sidebar v6.0.3 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

const timerSeconds = 120;
const answerText = document.getElementById('answerText');
const sidebarToggle = document.body.querySelector('#sidebarToggle');
const secondsLeftEl = document.getElementById('seconds-left');
const startBtn = document.getElementById('startBtn');

window.addEventListener('DOMContentLoaded', event => {

    secondsLeftEl.innerHTML = timerSeconds;

    startBtn.onclick = () => {
        startTimer(timerSeconds);
        answerText.style.display = 'block';
    }

    // Toggle the side navigation
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

function startTimer(timerSeconds) {
    secondsLeftEl.innerHTML = timerSeconds;
    let i = 0;
    let mi = setInterval(() => {
        ++i;
        if (i > timerSeconds) {clearInterval(mi)}
        else {secondsLeftEl.innerHTML = timerSeconds - i}
    }, 1000);
}
