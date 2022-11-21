function enableDarkMode() {
    const e = document.getElementsByTagName('html')[0];
    e.classList.add('dark');
    localStorage.setItem('is_darkmode_set', e.classList.contains('dark'));
}

function toggleDarkMode() {
    const e = document.getElementsByTagName('html')[0];
    e.classList.toggle('dark');
    localStorage.setItem('is_darkmode_set', e.classList.contains('dark'));
}

function toggleBackToTop() {
    const e = document.getElementById('back-to-top');
    if (window.scrollY === 0) e.classList.add('hidden');
    else e.classList.remove('hidden');
}

function backToTop() {
    window.scrollTo(0, 0);
}

if (localStorage.getItem('is_darkmode_set') === 'true') enableDarkMode();

document
    .getElementById('darkmode-toggle')
    .addEventListener('click', toggleDarkMode);

document
    .getElementById('back-to-top')
    .addEventListener('click', backToTop);

window.addEventListener('scroll', toggleBackToTop)

