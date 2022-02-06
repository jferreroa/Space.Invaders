let marcador = 0
const docWrite = () => {
  const containerMarcador = document.querySelector('.puntuacion')
  containerMarcador.innerHTML = marcador
}

const crearNave = () => {
  let nave = document.createElement('img')
  nave.className = 'nave'
  const left = Math.floor(Math.random() * 1300) + (0)
  nave.style.left = `${left}px`
  nave.style.top = "0px"
  //nave.innerHTML = 'NAVE'
  nave.setAttribute('src', 'images/tie2.png')
  const espacio = document.querySelector('.espacio')
  espacio.appendChild(nave)
}



const crearBala = () => {
  console.log("creando bala")
  let bala = document.createElement("img")
  const personaje = document.querySelector(".personaje")
  bala.style.left = parseInt(personaje.style.left) + 60 + "px"
  bala.style.top = parseInt(personaje.style.top) - 15 + "px"
  bala.className = "bala"
  bala.setAttribute('src', 'images/bala.png')
  //bala.innerHTML = "bala"
  const espacio = document.querySelector(".espacio")
  espacio.appendChild(bala)
}


const crearPersonaje = () => {
  let personaje = document.createElement("img")
  personaje.setAttribute('src', 'images/nave.png')
  personaje.className = "personaje"
  personaje.style.width = '100px'
  personaje.style.left = window.innerWidth / 2
  personaje.style.top = window.innerHeight - 200
  // personaje.innerHTML = "PERSONAJE"

  document.addEventListener('keydown', (event) => {
    console.log("movimiento personaje")
    switch (event.key) {
      case "ArrowRight":
        document.querySelector(".personaje").style.left = parseInt(document.querySelector(".personaje").style.left) + 85 + 'px'
        break;
      case "ArrowLeft":
        document.querySelector(".personaje").style.left = parseInt(document.querySelector(".personaje").style.left) - 85 + 'px'
        break;
      case " ":
        crearBala()
        break;

    }
  })

  const espacio = document.querySelector(".espacio")
  espacio.appendChild(personaje)

}

const pantallFin = () => {
  
  let fin = document.createElement("img")
  fin.className = "fin"
  fin.setAttribute('src', 'images/LA0012953.jpg')
  fin.style.left = window.innerWidth/2 + "px"
  fin.style.top = window.innerHeight/2 + "px"
  const espacio = document.querySelector(".espacio")
  espacio.appendChild(fin)
  
}

const finJuego = (crearNavesInterval,moverNavesInterval,moverBalasInterval) => {
  clearInterval(crearNavesInterval)
  clearInterval(moverNavesInterval)
  clearInterval(moverBalasInterval)
  const espacio = document.querySelector(".espacio")
  while (espacio.hasChildNodes()) {  
    espacio.removeChild(espacio.firstChild);
  }

  pantallFin()

}

window.onload = () => {
  crearPersonaje()
  crearNave()
  crearNave()
  crearNave()
  crearNave()



  //crear naves
  const crearNavesInterval = setInterval(() => {
    const naves = document.querySelectorAll(".nave")
    if (naves.length < 6) {
      crearNave();
    }

    naves.forEach(nave => {
      if (parseInt(nave.style.top) > 670) {
        const espacio = document.querySelector('.espacio')
        espacio.removeChild(nave)
      }
    })
  }, 400)

  //movimiento naves
  const moverNavesInterval = setInterval(() => {
    const naves = document.querySelectorAll(".nave")
    naves.forEach((nave, index) => {
      nave.style.top = parseInt(nave.style.top) + 5 + 'px'
    })
  }, 100)



  //movimiento balas 
  const moverBalasInterval = setInterval(() => {
    const balas = document.querySelectorAll(".bala")
    const naves = document.querySelectorAll(".nave")
    const espacio = document.querySelector('.espacio')

    balas.forEach((bala, index) => {
      bala.style.top = parseInt(bala.style.top) - 20 + 'px'
      if (parseInt(bala.style.top) < 100) {
        espacio.removeChild(bala)
      }
      naves.forEach(nave => {
        let posBala = {
          altura: parseInt(bala.style.top),
          anchura: parseInt(bala.style.left),
          XX: parseInt(bala.style.left) + 20,
          YY: parseInt(bala.style.top) + 30
        };
        let posNave = {
          altura: parseInt(nave.style.top),
          anchura: parseInt(nave.style.left),
          XX: parseInt(nave.style.left) + 100,
          YY: parseInt(nave.style.top) + 20
        };
        if (posBala.anchura <= posNave.XX && posBala.XX >= posNave.anchura && posBala.YY >= posNave.altura && posBala.altura <= posNave.YY) {
          espacio.removeChild(nave)
          espacio.removeChild(bala)
          marcador++
          docWrite()
          if(marcador == 20){
            finJuego(crearNavesInterval,moverNavesInterval,moverBalasInterval)
          }
        }
      })
    })
  }, 20)




}

