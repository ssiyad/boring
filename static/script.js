function toggleDarkMode() {
    document.body.classList.toggle('dark');
}

function toggleBackToTop() {
    const e = document.getElementById('back-to-top');
    if (window.scrollY === 0) e.classList.add('hidden');
    else e.classList.remove('hidden');
}

function backToTop() {
    window.scrollTo(0, 0);
}

document
    .getElementById('darkmode-toggle')
    .addEventListener('click', toggleDarkMode);

document
    .getElementById('back-to-top')
    .addEventListener('click', backToTop);

window.addEventListener('scroll', toggleBackToTop)

