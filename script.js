const mode = document.getElementById("modeBtn");

mode.addEventListener('click', () => {
    const form = document.getElementById('login');
    const corpo = document.getElementById('section');
    
    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        corpo.classList.add('dark');
        return;
    }

    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');
    form.classList.remove('dark');
    corpo.classList.remove('dark');
})