const sidenav = document.querySelectorAll(".side-nav a");
const pagesections = document.querySelectorAll(".page-sections section");
const learnmore = document.querySelector(".learnmore a");
const picturebutton = document.querySelector(".picture_project")

learnmore.addEventListener('click', ()=>{
    (sidenav.forEach(item=>{
        item.removeAttribute('class');
        if (item.getAttribute('href')==learnmore.getAttribute('href')){
            item.setAttribute('class','active');
        };
    }));
});

sidenav.forEach(item => {
    item.addEventListener('click', () =>{
        (sidenav.forEach(item=>{
            item.removeAttribute('class');
        }))
        item.setAttribute('class', 'active');
    });
});

document.addEventListener('wheel', ()=>{
    pagesections.forEach(section=>{
        if (isElementInViewport(section)){
            sidenav.forEach(item =>{
                item.removeAttribute('class');
                if (item.getAttribute('href').includes(section.getAttribute('class'))){
                    item.setAttribute('class','active');
                };
            });
        };
    });
});

function isElementInViewport (el) {
    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();

    return (
        rect.bottom - 40 <= (window.innerHeight) /* or $(window).height() */
        //rect.right <= (window.innerWidth) &&/* or $(window).width() */
        //rect.top >= 0 &&
        //rect.left >= 0 
        //rect.bottom <= (window.innerHeight) && /* or $(window).height() */
        //rect.right <= (window.innerWidth) /* or $(window).width() */
    );
};

picturebutton.addEventListener('click', () =>{
    $(".photography").fadeOut(500);
    $(".photography").fadeIn(500);
});
