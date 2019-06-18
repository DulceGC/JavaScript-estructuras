var signo = prompt('¿Cuál es tu signo?')

console.log(signo)

switch (signo) {
  case 'aries':
    console.log('Debería tener en cuenta las diferentes señales que se le presenten en el día. Muchas de ellas contendrán la clave que orientará su futuro próximo.');
    break
    case 'tauro':
      console.log('Deje de temerle al esfuerzo y sea más responsable en la vida. Debería tener presente que los logros muchas veces suelen tardar y requieren de mayor constancia.');
      break
      case 'geminis':
      case 'géminis':
      console.log('Hoy resuelva sobre la marcha esas situaciones nuevas que salgan a luz. Sepa que parte de sus futuras conquistas amorosas dependerán de su creatividad.');
        break
        case 'cancer':
        case 'cáncer':
        console.log('Aproveche, ya que será una jornada en la que podrá exponer su vitalidad e inteligencia en todo lo que emprenda. No dude y ponga en marcha esos proyectos postergados.');
          break
          case 'leo':
            console.log('Seguramente las obligaciones cotidianas lo superarán demasiado, evite caer en la desesperación. Paso a paso logrará concluir con todas las tareas que se propuso.');
            break
            case 'virgo':
              console.log('Vivirá una etapa especial donde deberá ordenar cada uno de los pensamientos. Intente tomarse un tiempo esencial para elaborar cada una de sus ideas.');
              break
              case 'libra':
              console.log('Por más que se sienta presionado por las situaciones que vive, su habilidad le permitirá esquivar cualquier dificultad que se le presente en la jornada.');
                break
                case 'escorpio':
                console.log('Recuerde no dejar para mañana la propuesta que quiere hacerle hoy a esa persona que hace tiempo no ve. Es hora de que empiece a actuar sin demorarse.');
                  break
                  case 'sagitario':
                console.log('No se detenga en el camino y anímese a lo desconocido. Será un día donde tendrá su mente relajada y con deseos de conocer nuevos rumbos para su vida.');
                    break
                    case 'capricornio':
                  console.log('Ponga más atención a los sueños que está teniendo últimamente por las noches. Pronto lo conectará con sus más profundos anhelos en su vida personal.');
                      break
                      case 'acuario':
                    console.log('Ponga más atención a los sueños que está teniendo últimamente por las noches. Pronto lo conectará con sus más profundos anhelos en su vida personal.');
                        break
                        case 'piscis':
                      console.log('Será una jornada donde podrá luchar para conseguir todo lo que desea hace tiempo y podrá obtenerlo sin inconvenientes. No permita que se escape ninguna oportunidad.');
                          break
          default:
          console.log('No es un signo sodiacal valido')
          break
}
