
let house_image_divs = document.querySelectorAll('.house_image_div')
let house_images = document.querySelectorAll('.house_image_div img');
let house_buttons = document.querySelectorAll(".button p");

let queue = document.querySelectorAll('.queue');
for(let i=0; i<house_image_divs.length;i++){

    house_image_divs[i].addEventListener('mouseenter',function(){
        house_images[i].style.filter = "blur(5px) brightness(0.55)"
        house_buttons[i].style.display = "block"
        house_buttons[i].style.opacity = "1"
        house_buttons[i].style.border = "2px solid rgba(255, 255, 255, 1)"
        queue[i].style.opacity ="0"
    })

    house_image_divs[i].addEventListener('mouseleave',function(){
        house_images[i].style.filter = ""
        house_buttons[i].style.opacity = "0"
        house_buttons[i].style.border = "2px solid rgba(255, 255, 255, 0)"
        house_buttons[i].style.display = "none"
        queue[i].style.opacity ="1"
    })

    queue[i].addEventListener('mouseenter',function(){
        house_images[i].style.filter = "blur(5px) brightness(0.55)"
        house_buttons[i].style.display = "block"
        house_buttons[i].style.opacity = "1"
        house_buttons[i].style.border = "2px solid rgba(255, 255, 255, 1)"
        queue[i].style.opacity ="0"
    })

    queue[i].addEventListener('mouseleave',function(){
        house_images[i].style.filter = ""
        house_buttons[i].style.opacity = "0"
        house_buttons[i].style.border = "2px solid rgba(255, 255, 255, 0)"
        house_buttons[i].style.display = "none"
        queue[i].style.opacity ="1"
    })

}