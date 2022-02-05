let marcador = 0;
function docWrite(variable) {
  document.write(variable);
}
const crearNave = () => {
  console.log("Creando nave")
  let nave = document.createElement('div')
  nave.className = 'nave'
  const left = Math.floor(Math.random() * 1300) + (0)
  nave.style.left = `${left}px`
  nave.style.top = "0px"
  nave.innerHTML = 'NAVE'
  nave.addEventListener('click', () => {
    espacio.removeChild(nave)
  })
  const espacio = document.querySelector('.espacio')
  espacio.appendChild(nave)
}



const crearBala = () => {
  console.log("creando bala")
  let bala = document.createElement("div")
  const personaje = document.querySelector(".personaje")
  bala.style.left = parseInt(personaje.style.left) + 70 + "px"
  bala.style.top = parseInt(personaje.style.top) - 30 + "px"
  bala.className = "bala"
  bala.innerHTML = "bala"
  const espacio = document.querySelector(".espacio")
  espacio.appendChild(bala)
}


const crearPersonaje = () => {
  console.log("Creando personaje");
  let personaje = document.createElement("div")
  personaje.className = "personaje"
  personaje.style.left = window.innerWidth / 2
  personaje.style.top = window.innerHeight - 200
  personaje.innerHTML = "PERSONAJE"

  document.addEventListener('keydown', (event) => {
    console.log("movimiento personaje")
    switch (event.key) {
      case "ArrowRight":
        console.log("derecha" + document.querySelector(".personaje").style.left)

        document.querySelector(".personaje").style.left = parseInt(document.querySelector(".personaje").style.left) + 85 + 'px'
        break;

      case "ArrowLeft":
        console.log("izquierda")
        document.querySelector(".personaje").style.left = parseInt(document.querySelector(".personaje").style.left) - 85 + 'px'
        break;

      case " ":
        crearBala()
        console.log("ESPACIOOOOOOOOO")
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



  //crear naves
  setInterval(() => {
    console.log("cerar nave")
    const naves = document.querySelectorAll(".nave")
    if (naves.length < 4) {
      crearNave();
    }

    naves.forEach(nave => {
      if (parseInt(nave.style.top) > 550) {
        const espacio = document.querySelector('.espacio')
        espacio.removeChild(nave)
      }
    })
  }, 400)

  //movimiento naves
  setInterval(() => {
    const naves = document.querySelectorAll(".nave")
    naves.forEach((nave, index) => {
      console.log("movimiento nave" + nave.style.top + index)
      nave.style.top = parseInt(nave.style.top) + 5 + 'px'
      console.log("new style top" + nave.style.top)
    })
  }, 100)



  //movimiento balas 
  setInterval(() => {
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

          console.log("CHOCAAAAAAAAN")
          espacio.removeChild(nave)
          espacio.removeChild(bala)
            marcador++
        }
      })



    })
  }, 10)













}

