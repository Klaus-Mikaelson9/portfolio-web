document.querySelector('.burger').onclick = function(){
    document.querySelector('.nav__ul').classList.toggle('nav__ul_active');
    document.querySelector('.nav').classList.toggle('nav_active');
    document.querySelector('.burger__icon').classList.toggle('burger__icon_active');
}

let arrSkills = document.querySelectorAll(".skills__h4");
if (arrSkills.length > 0) {
    //Получение массива с процентами на который необходимо заполнить прогресс бар
    let percentArr = [];
    for (let i = 0; i < arrSkills.length; i++) {
        percentArr.push(Number(arrSkills[i].innerHTML.slice(-4, -1)))
        }
    
    // Получение массива с заполняющими div
    let arrPadding = document.querySelectorAll(".skills__progress-bar-padding");
    
    // Функция добавляющая 1% к ширине при каждом вызове
    let plusOne = function(item) {
        let onePercent = document.querySelector(".skills__progress-bar").offsetWidth / 100;
        let currentWidth = item.offsetWidth;
        let newWidth = currentWidth + onePercent;
        item.setAttribute("style", `width: ${newWidth}px`)
    }
    
    //Функция выполняющая анимацию загрузки прогресс бара.
    let loadSkill = function() {
        for (let itemPadding = 0; itemPadding < arrPadding.length; itemPadding++) {
            let item = arrPadding[itemPadding];
            let iterTime = 3000/percentArr[itemPadding];
            for (let per= 0; per < percentArr[itemPadding]; per++) {
                setTimeout(plusOne, iterTime * per , arrPadding[itemPadding]);
            }
        }
    }
    
    // Контроль старта анимации
    let flag = true;
    
    //Высота бокса со шкалой прогресса
    let skillProgressHeight = document.querySelector(".skills__progress").offsetHeight; 

    // Пикселей до бокса со шкалой прогресса
    let skillProgressPosition = offset(document.querySelector(".skills__progress")).top;
    
    // Высчитывает количество пикселей до необходимого блока
    function offset(el) {
        const rect = el.getBoundingClientRect(),
              scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop + scrollTop}
    }
    
    // Стартует анимацию если флаг истина
    let startAnimation = function() {
        if (flag === true) {
            if (pageYOffset > skillProgressPosition - (window.innerHeight - skillProgressHeight / 4 )) {
                flag = false;
                loadSkill();
            }
        }
    }
    window.addEventListener("scroll", startAnimation);
        
}






