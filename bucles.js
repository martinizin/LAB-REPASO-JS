// 'use strict'
// const contador = 10
// for (let i = contador; i >= 0; i--) {
//     i <=0 ? console.log("Instalación Completada!"):console.log(i);
// }







// 'use strict'
// let contador = 10
// while (contador >= 0)
// {
//     contador<=0 ? console.log("Instalación Completada!"):console.log(contador)
//     contador--
// }





// 'use strict'
// let contador = 10
// do {
//     contador<=0 ? console.log("Instalación Completada!"):console.log(contador)
//     contador--
// } while (contador >= 0);







// // 'use strict'
const tareasPendientes = ['Informe Metodología','Deber AW','Ir al gym','Meditar','Lectura diaria']
const usuario ={
    nombre:"Martin",
    apellido:"Jimenez",
}

// // // // uso del forEach 
// // tareasPendientes.forEach((t,i)=> console.log(`${i} - ${t}`))

// // uso del for of -> usado para arreglos
// for (const t of tareasPendientes) {
//     console.log(`${t}`)
// }


// uso del for in -> usado para objetos
for (const clave in usuario) {
    console.log(`${usuario[clave]}`)
}
for (const [clave,valor] of Object.entries(usuario)) {
    console.log(`${clave} - ${valor}`)
}


// uso del map -> retorna un nuevo arreglo
const nuevasTareas = tareasPendientes.map((t)=> t)
console.log(nuevasTareas);