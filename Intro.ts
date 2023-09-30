const number = 1 
let n: number = 2

let texto = 'hola'

// que pasa cuando no sabe inferir un tipo

// cuando no infiere typescrypt le asigna un any

let anyValue: any = 'hola'

// Si usamos el valor de any ignora el tipado de Typescript

// inferencia
// Como a y b infiere que son number sin decirle nada

const a = 1
const b = 2
const c = a + b 

// c tambien sera number

let cadenaDeTexto = 'hola'

cadenaDeTexto.toUpperCase()

// ❌ cadenaDeTexto = 2
// ❌ cadenaDeTexto.propiedadInexistente


// functions 

// function saludar(name: string) {
//     console.log(`Hola ${name}`)
// }

// saludar('pepe')

// function saludar({name, age}: {name: string, age: number}) {
//     console.log(`Hola ${name}, tienes ${age} anos`)
// }

// function saludar({name, age}: {name: string, age: number}) : number {
//     console.log(`Hola ${name}, tienes ${age} anos`)
//     return age
// }


// Tipado de funciones

const sayHiFromFunction = (fn: (name: string) => void) => {
    fn('Miguel')
}

// cuando una funcion no regresa nada no tiene RETURN se usa void en el callback
// void es que no importa lo que regresa la funcion 

const sayHi= (name: string) => {
    console.log(`Hola ${name}`)
    return 
}

sayHiFromFunction(sayHi)

