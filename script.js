function togglemode() {
   const html = document.documentElement
   html.classList.toggle("light")
   //  pegar a tag img
   const img = document.querySelector("#profile img")
   // subs a imagem
   if (html.classList.contains("light")) {
     // se tiver light mode,adcionar a imagem light
     img.setAttribute("src", "./assets/p-light.jpg")
     img.setAttribute(
       "alt",
       "@patriciatargino com uma maquiagem espetacular"
     )
     
     } else {  
      // se tiver sem light mode,manter a imagem  normal }
      img.setAttribute("src", "./assets/avatar.jpg")
      img.setAttribute("alt", "foto da logo do seu Studio")
    }
  }

