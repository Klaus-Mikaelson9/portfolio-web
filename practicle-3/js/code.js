
document.querySelector('.burger').onclick = function(){
    document.querySelector('.burger__icon').classList.toggle('burger__icon_active');
    document.querySelector('.header__nav').classList.toggle('header__nav_active');
    document.querySelector('.header__ul').classList.toggle('header__ul_active');  
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

let containerWidth = document.querySelector(".bestTreks__container").offsetWidth;
let countWiew

function countWiews() {
	if (containerWidth === 990 || containerWidth === 876) {
		countWiew = 3;
	}else if (containerWidth === 650) {
		countWiew = 2;
	}
	else {
		countWiew = 1;
	};
};

countWiews();

let countItems = document.querySelectorAll(".bestTreks__item").length;
let trackWidth = document.querySelector(".bestTreks__track").offsetWidth;
let itemWidth = document.querySelector(".bestTreks__item").offsetWidth;
let track = document.querySelector(".bestTreks__track");
let btnNext = document.getElementById("btn_next");
let btnPrev = document.getElementById("btn_prev");
let slide = countWiew * itemWidth;
let iterslider = Math.ceil(countItems/countWiew);
let currentIter = 1;

function checkBtn() {
	document.getElementById("number1").innerHTML = currentIter;
	document.getElementById("number2").innerHTML = iterslider;

	if (currentIter === 1) {
		btnPrev.disabled = true;
		btnPrev.classList.add("prevBtn_disable");
		btnPrev.classList.remove("prevBtn_active");
		document.getElementById("number1").classList.remove("span_active");
	}else {
		btnPrev.disabled = false;
		btnPrev.classList.remove("prevBtn_disable");
		btnPrev.classList.add("prevBtn_active");
		document.getElementById("number1").classList.add("span_active");
	};

	if (currentIter === iterslider) {
		btnNext.disabled = true;
		btnNext.classList.add("nextBtn_disable");
		btnNext.classList.remove("nextBtn_active");
		document.getElementById("number2").classList.remove("span_active");
	}else {
		btnNext.disabled = false;
		btnNext.classList.add("nextBtn_active");
		btnNext.classList.remove("nextBtn_disable");
		document.getElementById("number2").classList.add("span_active");
	};

	if (btnNext.classList.contains("nextBtn_active") && btnPrev.classList.contains("prevBtn_active")) {
		document.querySelector(".bestTreck__counter").classList.add("span_active");
	}else {
		document.querySelector(".bestTreck__counter").classList.remove("span_active");
	};
};

checkBtn()
btnNext.onclick = toNext;
btnPrev.onclick = toPrev;

let currentPosition = 0;

function toNext() {
	if (((trackWidth - containerWidth) + currentPosition) < slide){
		currentPosition = -trackWidth + slide;
		track.style.left = currentPosition+"px";
	}else if ((trackWidth - containerWidth) - currentPosition > slide) {
		currentPosition = currentPosition - slide;
		track.style.left = currentPosition+"px";
	};
	currentIter++
	checkBtn();
};

function toPrev() {
	if (currentPosition + slide < 0) {
		currentPosition = currentPosition + slide;
		track.style.left = currentPosition+"px";
	}else if (currentPosition < 0){
		track.style.left = 0 +"px";
	};
	currentIter--
	if (currentIter === 1) {currentPosition = 0};
	checkBtn();
};