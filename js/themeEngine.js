// ! rx1310 <rx1310@inbox.ru> | Copyright (c) rx1310, 2021 | MIT License

/* themeEngine.js
 ? Данный скрипт просто переключает тему, но вдобавок
 ? сохраняет настройку темы в LocalStorage. Благодаря этому
 ? при след. посещении страницы тема пользователя останется такой же,
 ? какую он выбрал в прошлый раз. */

// * Взято отсюда: https://github.com/rx1310/VanillaCoreX/blob/vanilla/js/corex.js

const themeKey = {
	light: 'theme-light',
	dark: 'theme-dark'
};

/* setTheme()
 ? Данная функция позволяет сменить тему на одну из двух.
 * Пример: onclick="setTheme('theme-light')" - тема сменится на светлую.
 * Аналогично если вместо `theme-light` использовать `theme-dark`, то будет темная. */

function setTheme(themeName) {
	localStorage.setItem('kaliumTheme', themeName);
	document.documentElement.className = themeName;
}

/* toggleTheme()
 ? Данная функция не принимает никаких данных. При ее выполнении тема сменится
 ? на светлую если стоит темная и наоборот. По сути обычный тогл)) */
function toggleTheme() {
	if (localStorage.getItem('kaliumTheme') === themeKey.dark) {
		setTheme(themeKey.light);
	} else {
		setTheme(themeKey.dark);
	}
}

function applyTheme() {
	if (localStorage.getItem('kaliumTheme') === themeKey.dark) {
		setTheme(themeKey.dark);
	} else {
		setTheme(themeKey.light);
	}
} applyTheme();