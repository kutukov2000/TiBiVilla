let house_image_divs = document.querySelectorAll('.house_image_div')
let house_images = document.querySelectorAll('.house_image_div img');
let house_buttons = document.querySelectorAll(".button p");
let queue = document.querySelectorAll('.queue');

for (let i = 0; i < house_image_divs.length; i++) {
    
    house_image_divs[i].addEventListener('mouseenter', () => showButton(i))
    house_image_divs[i].addEventListener('mouseleave', () => hideButton(i))

    queue[i].addEventListener('mouseenter', () => showButton(i));
    queue[i].addEventListener('mouseleave', () => hideButton(i))
}

function showButton(index) {
    house_buttons[index].style.display = "block"
    house_images[index].style.filter = "blur(5px) brightness(0.55)"
    queue[index].style.opacity = "0"
}

function hideButton(index) {
    house_buttons[index].style.display = "none"
    house_images[index].style.filter = ""
    queue[index].style.opacity = "1"
}