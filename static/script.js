function toggleDarkMode() {
    document.body.classList.toggle('dark');
}

document
    .getElementById('darkmode-toggle')
    .addEventListener('click', toggleDarkMode);

