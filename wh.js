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
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = dulce.peso - 3
var dias = 0

while (dulce.peso > META){
if (comeMucho()){
  aumentarDePeso(dulce)
}
if (realizaDeporte()){
  adelgazar(dulce)
 }
 dias += 1
}

//console.log(`Al final del año ${dulce.nombre} pesa ${dulce.peso.toFixed(2)} kg`)
console.log(`Pasaron ${dias} dias hasta que ${dulce.nombre} adelgazo 3kg`)
