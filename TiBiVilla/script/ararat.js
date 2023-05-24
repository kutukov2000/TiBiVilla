 //Artur`s scripts

// Katalog images
let k_img = document.querySelectorAll('.katalog_image');
// katalog text "Детальніше"
let k_p = document.querySelectorAll(".katalog_button");
//Katalog div
let container = document.querySelectorAll('.container2')

let cherga = document.querySelectorAll('.first__cherga');
let image_zoom1 = document.getElementsByClassName('.clip_path_img_1 image_zoom');
let image_zoom = document.querySelectorAll('.image_zoom');
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

for(let i=0;i<image_zoom.length;i++){
    image_zoom[i].addEventListener('mouseenter',function(){
       
        if (i == 0 || i == 2 || i == 4){
            image_zoom[i+1].style.opacity = "0"
            image_zoom[i].style.objectFit = "cover"
            image_zoom[i].style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        }
        if (i == 1 || i == 3 || 5){
            image_zoom[i].style.objectFit = "cover"
            image_zoom[i].style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        }
        if(i == 3){
            image_zoom[2].style.opacity = "0"
        }
    })
    image_zoom[i].addEventListener('mouseleave',function(){
        if(i == 0 || i == 2 || i == 4){
            image_zoom[i+1].style.opacity = "1"
            image_zoom[i].style.objectFit = "cover"
            image_zoom[i].style.clipPath = "polygon(0 0, 100% 0, 50% 50%, 0 100%)"
        }
        if(i == 1){
            image_zoom[i].style.objectFit = "none"
            image_zoom[i].style.clipPath = "polygon(50% 50%, 100% 0, 100% 100%, 0 100%)"
        }
        if(i == 3 || i == 5){
            image_zoom[i].style.objectFit = "cover"
            image_zoom[i].style.clipPath = "polygon(50% 50%, 100% 0, 100% 100%, 0 100%)"
        }
        if(i == 3){
            image_zoom[2].style.opacity = "1"
        }
        
    })
}
