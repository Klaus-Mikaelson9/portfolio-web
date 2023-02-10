document.querySelector('.burger').onclick = function(){
    document.querySelector('.burger__icon').classList.toggle('burger__icon_active');
    document.querySelector('.nav-menu__ul').classList.toggle('nav-menu__ul_active');
};

let scroll;
let currentScrollPosition = 0;

let checkScroll = function() {
	scroll = window.pageYOffset;
	if (scroll < currentScrollPosition) {
		document.querySelector('.burger').classList.remove('burger_disable');
	}else{
		document.querySelector('.burger').classList.add('burger_disable');
	};
	currentScrollPosition = scroll;
};

window.onscroll = checkScroll;

document.querySelector(".nav-menu__btn-search").onclick = function() {
    document.querySelector(".nav-menu__input-search").classList.toggle("nav-menu__input-search_active");
}