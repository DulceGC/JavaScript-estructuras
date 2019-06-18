var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true
}
var juan = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 13,
}

function imprimirProfesiones(persona){
  console.log(`${persona.nombre} es:`)

  if (persona.ingeniero) {
      console.log('Ingeniero')
  } else {
    console.log('No es ingeniero');
  }
  if (persona.cocinero) {
      console.log('Cocinero')
    }
    if (persona.cantante) {
        console.log('Cantante')
      }
      if (persona.dj) {
          console.log('DJ')
        }
        if (persona.guitarrista) {
            console.log('Guitarrista')
          }
          if (persona.drone) {
              console.log('Piloto de drone')
            }
}

const MAYORIA_DE_EDAD = 18
function esMayorDeEdad(persona){
  return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiesMayorDeEdad(persona){
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}
//imprimirSiesMayorDeEdad(sacha)
//imprimirProfesiones(sacha)
