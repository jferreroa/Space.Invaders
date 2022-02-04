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
  //personaje.style.left = window.innerWidth/2 + 'px'
  //personaje.style.top = "80%"
  personaje.innerHTML = "personaje"
  personaje.addEventListener('click', () => {
    personaje.style.display = 'none'
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
      if(naves.length < 4){
        crearNave();
      }
  }, 300)


}

