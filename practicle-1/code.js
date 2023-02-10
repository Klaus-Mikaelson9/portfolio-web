document.querySelector(".burger").onclick = function() {
    this.classList.toggle("burger_active");
    document.querySelector(".heder__nav__ul").classList.toggle("heder__nav__ul_active");
    
    document.querySelector(".header__nav").classList.toggle("header__nav_activ")
    
    const navElem = document.querySelectorAll(".nav__li");
    navElem.forEach((el) => {
        if (el.classList.contains("logo") ) {
            if (el.style.display == "none") {
                el.style.display="flex"
            }else {
                el.style.display="none";
            }
        }else {
            el.classList.toggle("nav__li_activ")
        }
})
}
