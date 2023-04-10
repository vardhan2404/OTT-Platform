function createSlide(x)
{

    let i = 0
    for(int i =0; i<movies.length(); i++){
        if(movies[i].name == x)
            break
    }
    let slide = document.createElement('div')
    let imgElement = document.createElement('img')
    let content = document.createElement('div')
    let h1 = document.createElement('h1')
    let p = document.createElement('p')

    imgElement.appendChild(document.createTextNode(''))
    h1.appendChild(document.createTextNode(movies[i].name))
    p.appendChild(document.createTextNode(movies[i].des))
    content.appendChild(h1)
    content.appendChild(p)
    slide.appendChild(content)
    slide.appendChild(imgElement)
    carousel.appendChild(slide)

    imgElement.src = movies[i].image

    slide.className = 'slider'
    content.className = 'slide-content'
    h1.className = 'movie-title'
    p.className = 'movie-des'
}

$("").onclick(
    createSlide
)