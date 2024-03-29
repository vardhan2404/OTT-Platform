const carousel = document.querySelector('.carousel')
let sliders = []
let slideIndex = 0;
function createSlide(x)
{
    if(slideIndex >= movies.length)
    {
        slideIndex = 0;
    }
    if(x)
    {
    let slide = document.createElement('div')
    let imgElement = document.createElement('img')
    let content = document.createElement('div')
    let h1 = document.createElement('h1')
    let p = document.createElement('p')

    imgElement.appendChild(document.createTextNode(''))
    h1.appendChild(document.createTextNode(movies[slideIndex].name))
    p.appendChild(document.createTextNode(movies[slideIndex].des))
    content.appendChild(h1)
    content.appendChild(p)
    slide.appendChild(content)
    slide.appendChild(imgElement)
    carousel.appendChild(slide)

    imgElement.src = movies[slideIndex].image
    
        slideIndex++

        slide.className = 'slider'
        content.className = 'slide-content'
        h1.className = 'movie-title'
        p.className = 'movie-des'

        sliders.push(slide)

        if(sliders.length)
        {
            sliders[0].style.marginLeft = `calc(-${100*(sliders.length - 2)}% - ${30*(sliders.length - 2)}px)`
        }
    }
    else
    {
        if(sliders.length)
        {
            sliders[0].style.marginLeft = `calc(${100*(sliders.length - 2)}% + ${30*(sliders.length - 2)}px)`
        }
    }
}

for(let i = 0; i<3; i++)
{
    createSlide(1)
}

setInterval(()=>{
    createSlide(1)
},3000)


const videoCards = [...document.querySelectorAll(".video-card")]
videoCards.forEach(item => {
    item.addEventListener("mouseover", ()=>{
        let video = item.children[1]
        video.play()
    })
    item.addEventListener("mouseleave", ()=>{
        let video = item.children[1]
        video.pause()
    })

})

let cardContainers = [...document.querySelectorAll('.card-container')]
let preBtns = [...document.querySelectorAll('.pre-btn')]
let nxtBtns = [...document.querySelectorAll('.nxt-btn')]

cardContainers.forEach((item,i)=>{
    let containerDimentions = item.getBoundingClientRect();
    let containerWidth = containerDimentions.width;
    nxtBtns[i].addEventListener('click',()=>{
        item.scrollLeft +=containerWidth - 200;
    })
    preBtns[i].addEventListener('click',()=>{
        item.scrollLeft -=containerWidth + 200;
    })
})