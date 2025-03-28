window.document.addEventListener('DOMContentLoaded', ()=>{
    console.log("hola")
    let $mostrar_mas_comentario = document.querySelectorAll('.ver_mas')

    $mostrar_mas_comentario.forEach(element =>{
        element.addEventListener('click',()=>{
            let brotherBefore = element.previousElementSibling
            brotherBefore.classList.toggle('mostrar-mas-comentario')
            if(element.textContent == "Ver más"){
                element.textContent = "Mostrar menos"
            }else{
                element.textContent = "Ver más"
            }
        })
    })
})