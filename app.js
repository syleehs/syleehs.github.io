const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

document.body.style.backgroundImage = "/Images/Background/Calabogie-3"

previews.forEach(preview => {
    preview.addEventListener('click', () =>{
        modal.classList.add('open');
        original.classList.add('open');
        //Dynamic text and image
        const originalSrc = preview.getAttribute('data-original');
        original.src = `./Images/Full/${originalSrc}`;
        const altText = preview.alt;
        caption.textContent = altText;
    });
});

modal.addEventListener('click', (e) => {
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open");
        original.classList.remove('open');
    }
});