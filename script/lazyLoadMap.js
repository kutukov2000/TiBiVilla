const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const iframe = document.createElement("iframe");
            iframe.src = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10185.338435849593!2d30.3488173!3d50.3416641!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x542534a273ef9b75!2sTibi.Villa!5e0!3m2!1suk!2sua!4v1611131130029!5m2!1suk!2sua';
            iframe.title = 'Location map';
            iframe.width = 600;
            iframe.height = 450;
            iframe.ariaHidden = false;
            iframe.tabIndex = 0;

            entry.target.appendChild(iframe);
            observer.unobserve(entry.target);
        }
    });
});

const lazyLoadMapElements = document.querySelectorAll(".lazy-load-map");
lazyLoadMapElements.forEach((element) => {
    observer.observe(element);
});

document.addEventListener("touchstart", touchStartHandler, { passive: true });
document.addEventListener("touchmove", touchMoveHandler, { passive: true });
document.addEventListener("wheel", wheelHandler, { passive: true });

function touchStartHandler(event) {
}

function touchMoveHandler(event) {
}

function wheelHandler(event) {
}
