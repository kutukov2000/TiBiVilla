 //Artur`s scripts

// Katalog images
let k_img = document.querySelectorAll('.house_image_div img');
// katalog text "Детальніше"
let k_p = document.querySelectorAll(".button p");
//Katalog div
let container = document.querySelectorAll('.house_image_div')

let cherga = document.querySelectorAll('.queue');
for(let i=0; i<container.length;i++){

    container[i].addEventListener('mouseenter',function(){
        k_img[i].style.filter = "blur(5px) brightness(0.55)"
        k_p[i].style.display = "block"
        k_p[i].style.opacity = "1"
        k_p[i].style.border = "2px solid rgba(255, 255, 255, 1)"
        cherga[i].style.opacity ="0"
    })

    container[i].addEventListener('mouseleave',function(){
        k_img[i].style.filter = ""
        k_p[i].style.opacity = "0"
        k_p[i].style.border = "2px solid rgba(255, 255, 255, 0)"
        k_p[i].style.display = "none"
        cherga[i].style.opacity ="1"
    })

    cherga[i].addEventListener('mouseenter',function(){
        k_img[i].style.filter = "blur(5px) brightness(0.55)"
        k_p[i].style.display = "block"
        k_p[i].style.opacity = "1"
        k_p[i].style.border = "2px solid rgba(255, 255, 255, 1)"
        cherga[i].style.opacity ="0"
    })

    cherga[i].addEventListener('mouseleave',function(){
        k_img[i].style.filter = ""
        k_p[i].style.opacity = "0"
        k_p[i].style.border = "2px solid rgba(255, 255, 255, 0)"
        k_p[i].style.display = "none"
        cherga[i].style.opacity ="1"
    })

}