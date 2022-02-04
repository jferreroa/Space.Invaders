const move = () => {
  //alert("no pinchhees");
  let elem = document.getElementById("titulo")
  if (elem.style.top == "30%") {
    elem.style.top = "50%"
    elem.innerHTML = "Hola"
  } else {
    elem.style.top = "30%";
    //elem.textContent = "Adios"
    elem.innerHTML = "adios"
  }

  console.log(parseInt(elem.style.top))
}




const crearNave = () => {
  console.log("Creando nave")
  let nave = document.createElement('div')
  nave.className = 'nave'
  const left = Math.floor(Math.random() * 1000) + 500
  nave.style.left = `${left}px`
  nave.style.top = "0px"
  nave.innerHTML = 'NAVE'
  nave.addEventListener('click', () => {
    espacio.removeChild(nave)
  })

  const espacio = document.querySelector('.espacio')
  espacio.appendChild(nave)
}

const crearPersonaje = () => {
  console.log("Creando personaje");
  let personaje = document.createElement("div")
  personaje.className = "personaje"
  personaje.style.left = window.innerWidth/2 
  personaje.style.top = window.innerHeight - 200
  personaje.innerHTML = "PERSONAJE"



  personaje.addEventListener('click', () => {
    personaje.style.display = 'none'
  })

  document.addEventListener('keydown', (event) => {
    console.log("movimiento personaje")
    switch (event.key) {
      case "ArrowRight":
        console.log("derecha" + document.querySelector(".personaje").style.left)
        
        document.querySelector(".personaje").style.left = parseInt(document.querySelector(".personaje").style.left) + 90 + 'px'
        break;
  
      case "ArrowLeft":
        console.log("izquierda")
        document.querySelector(".personaje").style.left = parseInt(document.querySelector(".personaje").style.left) - 90 + 'px'
        break;
    }
  })





  const espacio = document.querySelector(".espacio")
  espacio.appendChild(personaje)


}

window.onload = () => {

  crearPersonaje()
  crearNave()
  crearNave()
  crearNave()
  crearNave()
  
  


  setInterval(() => {
    const naves = document.querySelectorAll(".nave")
    if (naves.length < 4) {
      crearNave();
    }
  }, 300)

  setInterval(() => {
    const naves = document.querySelectorAll(".nave")
    naves.forEach((nave,index) => {
      console.log("movimiento nave" + nave.style.top +  index)
      nave.style.top = parseInt(nave.style.top) + Math.floor(Math.random() * 30) + 10 + 'px'
      console.log("new style top" + nave.style.top)
    })
  },100)













}

