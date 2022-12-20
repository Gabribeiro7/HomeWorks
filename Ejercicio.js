// const goToUpgrade = function(student, cbPrintMessage, greetingsList, studentProperties){
//     // bloque de código que se ejecuta
//     console.log(studentProperties.saludo + ' soy ' + student);
//     console.log('Quiero aprender programación, así que');
//     studentProperties.pagar();
//     console.log('Después de pagar me he quedado con la cartera a ' + studentProperties.cartera[0]);
//     console.log('Pero después que nos explotara la cabeza en este ejercicio hemos acabado bien porque...');
//     cbPrintMessage();
//     console.log('Y después de terminar el bootcamp nos vamos a la casa rural de cervecitas');
//     console.log('Fin de la historia!!! ' + greetingsList[0]);
// }

// goToUpgrade('developer', function() {
//     console.log('Somos unos cracks');
// }, ['adios'], {
//     saludo: 'Hola',
//     cartera: [0, 5, 0.5],
//     pagar: function() {
//         console.log('Pago el bootcamp');
//     },
// });

const pasarLaNavidad = function(villano, houseData, kitt, agenda, theEnd, myName, boo, bajoMulta  ){
console.log("Hola! me llamo " + myName.replace("(cambia con tu nombre esta string)" , "Gabriel")
 + " y os cuento la historia de mi peor regalo de Reyes.");
console.log( "Eran "); 
agenda.function();
console.log(" de invierno de 2015, justamente el dia 5 de Enero y habia quedado de");
console.log(agenda.medioDia + " y ir al cine ver la nueva peli de " + villano + ". ");
console.log("Luego llegando a casa oí un grito...");
houseData[1]();
console.log(" me asusté, " + houseData[2] + " un barrio malo del " + agenda.destinoVacaciones[1] + 
" he entrado rápido a ver lo que pasaba...");
console.log(" y me deparo con mi hermano vendo '" + houseData[0] + "' con el volumen a tope.");
console.log("He ido a mi habitación ver un capitulo de " + boo + " Detective que daba en la tele..")
console.log(" fue cuando me acordé que habia olvidado de comprar el regalo a mi hermano pequeño y ")
console.log(houseData[3] + " 5, en la " + agenda.noche);
console.log("Él queria " + bajoMulta + ", tenía " + agenda.dia + " meses y era su manera de pronunciar 'un delfín'...");
console.log("he decidido regalarle mi juguete de KITT, el coche fantástico, con un muñeco de " + kitt + " dentro..." );
console.log(" le encantó, uff menos mal. Yo había pedido un viaje a " + agenda.destinoVacaciones[0]);
console.log(" y gané un billete para " + agenda.destinoVacaciones[3] + "(Donde coño está eso?)");
console.log(theEnd());





}









// Ejercicio. Define la función.
pasarLaNavidad(
    //argumento 1 string
    'Grinch',
    //argumento 2 un array
     [
    // argumento 2.1 string
    'Solo en casa',
    // argumento 2.2 función 
    function() {
        console.log('AaRrrrGgggggg ¡Llegan los ladrones!')
    },
    // argumento 2.3 string
    'como vivia en', // ¿Santa o Reyes magos?
    // argumento 2.4 string
    'Recibimos los regalos el día'
],  
    // argumento 3 string
    'Michael Knight',
    // argumento 4 objeto
 {
    medioDia: 'Comer con los amigos',
    dia: 24,
    noche: 'Cena familiar',
    // argumento 4.2 array
    destinoVacaciones:
     [
        'Honolulu',
        'Polo Norte',
        'Caribe',
        'Torrevieja',
        'Badajoz',
    ],
    // argumento 4.3 función
    function() {
        console.log('Mis vacaciones');
    },
},  
    // argumento 5 función
function() {
    return 'Fin de la Historia';
}, 
    //argumento 6 string
    '(cambia con tu nombre esta string)',
    // argumento 7 booleano
     true, 
     // argumento 8 undefined
     undefined);