document.querySelector('.burger').onclick = function(){
    document.querySelector('.burger__icon').classList.toggle('burger__icon_active');
    document.querySelector('.nav-menu__list').classList.toggle('nav-menu__list-active');
};


let headerBackground = function() {
	if (window.pageYOffset < 82) {
		document.querySelector('.header').classList.remove('header_FillBackground');
	}else {
		document.querySelector('.header').classList.add('header_FillBackground');

	}
}

let scroll;
let currentScrollPosition = 0;


let checkScrollLarge = function() {
	scroll = window.pageYOffset;
	if (scroll < currentScrollPosition) {
		document.querySelector('.header').classList.remove('header_disable');
	}else{
		document.querySelector('.header').classList.add('header_disable');
	};
	currentScrollPosition = scroll;
};
let checkScrollSmall = function() {
	scroll = window.pageYOffset;
	if (scroll < currentScrollPosition) {
		document.querySelector('.burger').classList.remove('burger_disable');
	}else{
		document.querySelector('.burger').classList.add('burger_disable');
	};
	currentScrollPosition = scroll;
};



window.onscroll = function() {
	if (window.screen.width > 550) {
		checkScrollLarge()
		headerBackground()
	}else {
		checkScrollSmall()
	}
}

document.querySelector(".nav-menu__search-btn").onclick = function() {
    document.querySelector(".nav-menu__input").classList.toggle("nav-menu__input-search_active");
}

/* Slider-1*/

let scrollWidth = (screen.width - document.body.offsetWidth);

let slider1 = document.querySelector(".main__items");

document.getElementById("slider__btn1").onclick = function() {
	slider1.style.left = -scrollWidth + "px";
}
document.getElementById("slider__btn2").onclick = function() {
	slider1.style.left = -(screen.width + scrollWidth) + "px";
}
document.getElementById("slider__btn3").onclick = function() {
	slider1.style.left = -(2 * screen.width + scrollWidth) + "px";
}


/* Slider-2*/

let slider2 = document.querySelector(".recall__items");


document.getElementById("slider2__btn1").onclick = function() {
	slider2.style.left = -scrollWidth + "px";
}
document.getElementById("slider2__btn2").onclick = function() {
	slider2.style.left = -(screen.width + scrollWidth) + "px";
}
document.getElementById("slider2__btn3").onclick = function() {
	slider2.style.left = -(2 * screen.width + scrollWidth) + "px";
}
