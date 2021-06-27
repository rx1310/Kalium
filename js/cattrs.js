// ! rx1310 <rx1310@inbox.ru> | Copyright (c) rx1310, 2021 | MIT License

/* cattrs.js
 ? Данный скрипт просто обрабатывает кастомные аттрибуты,
 ? которые позволяют кастомизировать стили прямо в HTML,
 ? не открывая таблицу стилей. */

const attrColor = document.querySelectorAll('[k-color]'),
			attrBackground = document.querySelectorAll('[k-bg]'),
			attrPadding = document.querySelectorAll('[k-padding]'),
			attrMarging = document.querySelectorAll('[k-margin]');

// ? Example: <p k-color="#ff0000">...</p>
attrColor.forEach(element => { element.style.color = element.getAttribute('k-color'); })

// ? Example: <div k-bg="../assets/images/img.jpg">...</div> or <div k-bg="#ffffff">...</div>
attrBackground.forEach(element => { element.style.background = "url(" + element.getAttribute("k-bg") + ")"; })

// ? Example: <div k-padding="1em">...</div> or <div k-padding="1em 1.5em">...</div>
attrPadding.forEach(element => { element.style.padding = element.getAttribute('k-padding'); })

// ? Example: <div k-margin="1em">...</div> or <div k-margin="1em 1.5em">...</div>
attrMarging.forEach(element => { element.style.margin = element.getAttribute('k-margin'); })
