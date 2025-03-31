let bandera = false;
window.document-addEventListener("scroll", ()=>{
    if(window.scrollY > 3667){
        efectoAparicion()
    }
})


function efectoAparicion(){
    const cardsEmployeds = document.querySelectorAll(".employeds_card")

    cardsEmployeds.forEach((element, index) => {
        setTimeout(()=>{
            element.classList.add("efecto-aparicion-employeds")
        }, 300 * index)
        
    });
}

