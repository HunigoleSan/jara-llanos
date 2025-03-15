function showNavbarMobile(){
    let $navbar = document.getElementById('navbar-mobile')
    let $listNavegationMobile = document.getElementById('list-navegation-mobile')
    $navbar.addEventListener('click',(e)=>{
        console.log(e.target.classList.contains("navbar-icon"))
        $listNavegationMobile.classList.toggle('show-navbar-mobile')

    })
}

function hiddenNavbarMobile(){
    let $listNavegationMobile = document.getElementById('list-navegation-mobile')
    $listNavegationMobile.addEventListener('click',(e)=>{
        $listNavegationMobile.classList.remove('show-navbar-mobile')
    })
}

window.document.addEventListener('DOMContentLoaded',()=>{
    showNavbarMobile()
    hiddenNavbarMobile()
})