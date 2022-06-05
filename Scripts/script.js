(function start(){
    const parallax = new Parallax(document.querySelector(".parallaxed3"))
    const swiper = new Swiper(".planets", {
        mousewheel: true,
        spacebetween: 150,
        loop: true,
        pagination:{
            el: ".swiper-pagination",
            clickable: true
        }
    })
    let shrinkFactor = 1.5
    const width = window.innerWidth
    const planetImgs = document.querySelectorAll(".planet-img")
    if(width < 1200)
        shrinkFactor = 1.2
    let scaledImg = shrinkFactor * width / 1600
    if(scaledImg < 1)
        scaledImg = 1
    planetImgs.forEach((planetImg) => {
        planetImg.style = `transform: scale(${scaledImg})`
    })

    swiper.on("slideChange", () => {
        // gsap.from(".planet-text", {
        //     x: "-200%",
        //     ease: Power2
        // })
        gsap.from(".planet-img", {
            scale: "0",
            ease: Power2
        })
    })
    swiper.on("slideChangeTransitionEnd", () => {
        // gsap.to(".planet-text", {
        //     x: "0",
        //     ease: Power2
        // })
        gsap.to(".planet-img", {
            scale: scaledImg,
            ease: Power2
        })
    })
})()