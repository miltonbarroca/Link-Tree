function toggleMode() {
    const html = document.documentElement 
    html.classList.toggle('light')

    //pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir imagem  
    if (html.classList.contains('light')){
    // se tiver no light mode, adicionar a imagem light 
    img.setAttribute('src', './images/avatar.png')
    } else {
    //se tiver sem light mode, manter imagem normal
    img.setAttribute('src', './images/avatar-dark.png')
    }

}

