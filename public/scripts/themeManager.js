updatePageTheme();

function updatePageTheme() {
	if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
		document.documentElement.classList.add('dark');
		document.querySelector(".darkMode-toggle > input").checked = false;
	} else {
		document.documentElement.classList.remove('dark');
		document.querySelector(".darkMode-toggle > input").checked = true;
	}
}

function toggleDarkMode() {
	const btn = document.querySelector(".darkMode-toggle > input");
	if (btn.checked) localStorage.theme = 'light'
	else localStorage.theme = 'dark';
	updatePageTheme();
}