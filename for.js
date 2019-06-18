var dulce = {
  nombre: 'Dulce',
  apellido: 'González',
  edad: 24,
  peso: 58
}

console.log(`Al inicio del año ${dulce.nombre} pesa ${dulce.peso} kg`)

const INCREMENTO_PESO = 0.2
const DIAS = 365
//function aumentarDePeso(persona) {
  //return persona.peso += 200
//}

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona =>persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS; i++ ) {
  var random = Math.random()

if (random < 0.25 ){
  aumentarDePeso(dulce)
} else if (random < 0.5){
  adelgazar(dulce)
 }
}

console.log(`Al final del año ${dulce.nombre} pesa ${dulce.peso.toFixed(2)} kg`)
