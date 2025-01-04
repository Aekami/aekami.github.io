
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    themeToggleButton.addEventListener('click', () => {
        if (body.classList.toggle('light-mode')){
            localStorage.setItem('theme', 'light-mode');  
        } else {
            localStorage.removeItem('theme');
        }
    });
});
