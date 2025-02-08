const slides = document.querySelectorAll(".slider");
let counter = 0

slides.forEach(
    (slide,index)=>{
        slide.style.left = `${index*100}%`
    }
)

const goPrev =  ()=>{
    counter--
    slideImage()
}


const goNext =  ()=>{
    counter++
    slideImage()
}

const slideImage = ()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform = `translate(-${counter*100}%)`
        }
    )
}