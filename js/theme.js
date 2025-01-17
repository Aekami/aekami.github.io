
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        const body = document.body;
        body.classList.add(savedTheme);
    }
});

function swapTheme() {
    document.body.classList.toggle('light-mode') ? localStorage.setItem('theme', 'light-mode') :  localStorage.removeItem('theme');
}