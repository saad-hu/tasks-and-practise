const root = document.documentElement; //or document.querySelector('html')

const toogleButton = document.querySelector('.toggleTheme');

toogleButton.addEventListener('click', () => {
    const newTheme = root.className==='dark' ? 'light' : 'dark';

    root.className = newTheme;

    document.querySelector('.themeName').textContent = newTheme;
});