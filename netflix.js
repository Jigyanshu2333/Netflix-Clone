let navbar = document.getElementById('navbar');

const toggle =() =>{
    if(navbar.style.display == "none"){
        navbar.style.display = "block";
        navbar.style.textAlign = "left";
    }
    else{
        navbar.style.display = "none";
    }
}
function carousel(){
    let carouselSlider = document.querySelector(".carousel-slider");
    let list = document.querySelector(".carousel-list");
    let item = document.querySelector(".carousel-item");
    let list2;
    const speed = 1;
    const width = list.offsetWidth;
    let x = 0;
    let x2 = width;
    function clone(){
        list2 = list.cloneNode(true);
        carouselSlider.appendChild(list2);
        list2.style.left = `${width}px`;
    } 
    function moveFirst(){
        x-=speed;
        if(width>=Math.abs(x)){
            list.style.left = `${x}px`;
        }
        else{
            x = width;
        }
    }
    function moveSecond(){
        x2 -= speed;
        if(list.offsetwidth >= Math.abs(x2)){
            list2.style.left = `${x2}px`;
        }
        else{
            x2 = width;
        }
    }
    function hover(){
        clearInterval(a);
        clearInterval(b);
    }
    function unhover(){
        a = setInterval(moveFirst,50);
        b = setInterval(moveSecond,50);
    }
    clone();
    let a = setInterval(moveFirst,20);
    let b = setInterval(moveSecond,20);
    carousalSlider.addEventListener("mouseenter",hover);
    carousalSlider.addEventListener("mouseenter",unhover);
}
carousel();