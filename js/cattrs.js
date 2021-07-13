// ! rx1310 <rx1310@inbox.ru> | Copyright (c) rx1310, 2021 | MIT License

/* cattrs.js
 ? Данный скрипт просто обрабатывает кастомные аттрибуты,
 ? которые позволяют кастомизировать стили прямо в HTML,
 ? не открывая таблицу стилей. */

document.querySelectorAll('[k-color]').forEach(element => {
	element.style.color = element.getAttribute('k-color');
});

document.querySelectorAll('[k-bg]').forEach(element => {
	element.style.background = element.getAttribute('k-bg');
});

document.querySelectorAll('[k-bg-url]').forEach(element => {
	element.style.background = "url(" + element.getAttribute("k-bg-url") + ")";
});

document.querySelectorAll('[k-margin]').forEach(element => {
	element.style.margin = element.getAttribute('k-margin');
});

document.querySelectorAll('[k-margin-t]').forEach(element => {
	element.style.marginTop = element.getAttribute('k-margin-t');
});

document.querySelectorAll('[k-margin-b]').forEach(element => {
	element.style.marginBottom = element.getAttribute('k-margin-b');
});

document.querySelectorAll('[k-margin-l]').forEach(element => {
	element.style.marginLeft = element.getAttribute('k-margin-l');
});

document.querySelectorAll('[k-margin-r]').forEach(element => {
	element.style.marginRight = element.getAttribute('k-margin-r');
});

document.querySelectorAll('[k-padding]').forEach(element => {
	element.style.margin = element.getAttribute('k-padding');
});

document.querySelectorAll('[k-padding-t]').forEach(element => {
	element.style.paddingTop = element.getAttribute('k-padding-t');
});

document.querySelectorAll('[k-padding-b]').forEach(element => {
	element.style.paddingBottom = element.getAttribute('k-padding-b');
});

document.querySelectorAll('[k-padding-l]').forEach(element => {
	element.style.paddingLeft = element.getAttribute('k-padding-l');
});

document.querySelectorAll('[k-padding-r]').forEach(element => {
	element.style.paddingRight = element.getAttribute('k-padding-r');
});

// document.querySelectorAll('[k-]').forEach(element => {
// 	element.style. = element.getAttribute('k-');
// });