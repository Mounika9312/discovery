let movies = [
    {
        name: "Adventure",
        des:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo provident dolores deserunt, dolorem maiores veritatis assumenda labore, tenetur et explicabo eius! Ea,fuga nemo? Blanditiis fugit aliquid qui vel aut",
        image: "image/adventure.jpeg"
    },
    {
        name: "Arabia",
        des:
            "Lorem ipsum dolor sit samet consectetur, adipisicing elit. Nemo provident dolores deserunt, dolorem maiores veritatis assumenda labore, tenetur et explicabo eius! Ea,fuga nemo? Blanditiis fugit aliquid qui vel aut",
        image: "image/arabia.jpeg"
    },
    {
        name: "Devlok",
        des:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo provident dolores deserunt, dolorem maiores veritatis assumenda labore, tenetur et explicabo eius! Ea,fuga nemo? Blanditiis fugit aliquid qui vel aut",
        image: "image/devlok.jpeg"
    }


]
const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }
    let slide = document.createElement('div');
    var imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');


    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);


    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";



    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }

}
for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);




