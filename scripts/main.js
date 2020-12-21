new fullpage('#fullpage', {
    anchors: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'],
    menu: '#myMenu'
});

let burger = document.getElementById('burger');
let nav = document.getElementById('main-nav');

burger.addEventListener('click', function (e) {
    this.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});


function clickMobileMenu() {
    burger.classList.toggle('is-open');
    nav.classList.toggle('is-open');
}