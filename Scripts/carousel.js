(function startCarousel(){
    var noImages = 3
    var inAnimationDuration = 2000
    var timeToWatch = 500
    var outAnimationDuraion = 800
    var speed = inAnimationDuration + timeToWatch + outAnimationDuraion


    var i = 1
    startCarousel()
    function startCarousel(){
        if(i === 1)
            setTimeout(function () {
                startCarouselHelper(i)
            }, 500)
        else
            setTimeout(function () {
                startCarouselHelper(i)
            }, speed)
    }

    function startCarouselHelper(){
        if(i <= noImages) {
            // console.log(i)
            setImage(i)
            i++
            startCarousel()
        }
        else
        if(i === noImages + 1){
            i = 1
            document.querySelector(".content img").src = ""
            startCarousel()
        }

    }
    function setImage(index){
        const imageName = "Images/Carousel/img" + index + ".svg"
        const imgPLaceHolder = document.querySelector(".content img")
        imgPLaceHolder.src = imageName
        imgPLaceHolder.classList.replace("inactive","active")
        setTimeout(removeAnimationClass,inAnimationDuration + timeToWatch)
    }
    function removeAnimationClass(){
        const imgPLaceHolder = document.querySelector(".content img")
        imgPLaceHolder.classList.replace("active","inactive")
    }
})()