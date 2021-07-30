updatePageTheme();

function updatePageTheme() {
	if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
		document.documentElement.classList.add('dark')
	} else {
		document.documentElement.classList.remove('dark')
	}
}

function toggleDarkMode() {
	const theme = localStorage.getItem("theme");
	if (theme === 'light') localStorage.theme = 'dark';
	else localStorage.theme = 'light';
	updatePageTheme();
}