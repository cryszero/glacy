var slider_switcher_1 = document.querySelector('.slider__switcher_1');
var slider_switcher_2 = document.querySelector('.slider__switcher_2');
var slider_switcher_3 = document.querySelector('.slider__switcher_3');

var container = document.querySelector('.container');

var catalog_button = document.querySelector('.header__navigation-link_catalog');
var catalog_list = document.querySelector('.header__catalog');
var search_button = document.querySelector('.header__search-button');
var search_form = document.querySelector('.search-form');
var login_button = document.querySelector('.header__entrance-button');
var login_form = document.querySelector('.login-form');


var feedback_open = document.querySelector('.contacts__form-button');
var feedback_close = document.querySelector('.feedback__close');
var feedback = document.querySelector('.feedback');
var overlay = document.querySelector('.dark-overlay');

catalog_button.addEventListener('mouseover', function(evt) {
	evt.preventDefault();
	catalog_list.classList.toggle('header__catalog_visible');
	login_form.classList.remove('login-form_visible');
	search_form.classList.remove('search-form_visible');
});

search_button.addEventListener('mouseover', function(evt) {
	evt.preventDefault();
	search_form.classList.toggle('search-form_visible');
	login_form.classList.remove('login-form_visible');
	catalog_list.classList.remove('header__catalog_visible');
});

login_button.addEventListener('mouseover', function(evt) {
	evt.preventDefault();
	login_form.classList.toggle('login-form_visible');
	search_form.classList.remove('search-form_visible');
	catalog_list.classList.remove('header__catalog_visible');
});

slider_switcher_1.addEventListener('click', function(evt) {
	document.body.style.backgroundColor= '#849d8f';
	container.classList.remove('banner_2','banner_3');
	container.offsetWidth = container.offsetWidth;
	container.classList.add('banner_1');
	document.querySelector('.slider__switcher_active').classList.toggle('slider__switcher_active');
	document.querySelector('.slider__offer').innerHTML='Крем-брюле и пломбир с малиновым джемом';
	slider_switcher_1.classList.toggle('slider__switcher_active');
});

slider_switcher_2.addEventListener('click', function(evt) {
	document.body.style.backgroundColor= '#8996a6';
	container.classList.remove('banner_1', 'banner_3');
	container.offsetWidth = container.offsetWidth;
	container.classList.add('banner_2');
	document.querySelector('.slider__switcher_active').classList.toggle('slider__switcher_active');
	document.querySelector('.slider__offer').innerHTML='Шоколадный пломбир и лимонный сорбет';
	slider_switcher_2.classList.toggle('slider__switcher_active');
});

slider_switcher_3.addEventListener('click', function(evt) {
	document.body.style.backgroundColor= '#9d8b84';
	container.classList.remove('banner_1', 'banner_2');
	container.offsetWidth = container.offsetWidth;
	container.classList.add('banner_3');
	document.querySelector('.slider__switcher_active').classList.toggle('slider__switcher_active');
	document.querySelector('.slider__offer').innerHTML='Пломбир с помадкой и клубничный щербет';
	slider_switcher_3.classList.toggle('slider__switcher_active');
});

feedback_close.addEventListener('click', function(evt){
	evt.preventDefault();
	feedback.classList.remove('feedback_visible');
	document.body.classList.remove('body_dark-overlay');
	overlay.classList.remove('dark-overlay_on');
});

feedback_open.addEventListener('click', function(evt){
	evt.preventDefault();
	feedback.classList.add('feedback_visible');
	document.body.classList.add('body_dark-overlay');
	overlay.classList.add('dark-overlay_on');
});