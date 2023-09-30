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

// Tipado en => function

const sumar = (a: number, b: number): number => {
    return a + b
}

const restar: (a: number, b: number) => number = (a, b) => {
    return a - b
}

// Never 

// function throwError(message: string) : never {
//     throw new throwError(message);
// }

// Never es para que nunva regrese nada y void puede devolver un valor pero se ignora

function logMessage(message: string) : void {
    console.log(message);

    // throw new throwError(message); 


    // return implicito <---- Never nunca llega, el void si llega pero lo ignora
}

// inferencia de funciones anonimas segun el contexto

// const avengers = ['Spidey', 'Hulk', 'Avvengers']

// avengers.forEach(function (avenger) {
//     console.log(avenger.toUpperCase)
// })

// Objetos 

// let hero = {
//     name: 'Hero',
//     age: 36
// }

// function createHero(name: string, age: number) {
//     return {name, age}
// }

// const thor = createHero('Thor',1500)


// Type Alias 

// type Hero = {
//     name: string
//     age: number
// }

// let hero: Hero = {
//         name: 'Hero',
//         age: 36
//     }
    
// function createHero(hero: Hero): Hero {
//     const {  name, age } = hero
//     return {name, age} 
// }
    
// const thor = createHero({name: 'Thor', age: 1500})

// Optional propiertes

// type HeroId = `${string}-${string}-${string}-${string}-${string}`

// type Hero = {
//     readonly id?: HeroId // readonly es para que no se modifique es solo de lectura
//     name: string
//     age: number
//     isActive?: boolean // <- poniendo el ? es opcional
// }

// let hero: Hero = {
//         name: 'Hero',
//         age: 36
// }
    
// function createHero(hero: Hero): Hero {
//     const {  name, age } = hero
//     return {
//         id: crypto.randomUUID(),
//         name, 
//         age, 
//         isActive: true
//     } 
// }

// const thor = createHero({name: 'Thor', age: 1500})


// Template union types

type HexadecimalColor = `#${string}`

// const color: HexadecimalColor = '0033ff'
const color2: HexadecimalColor = '#0033ff'

// Union types

// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

// let ann : string | 2
// // union de tipos 
// ann = 2

// type Hero = {
//     readonly id?: HeroId // readonly es para que no se modifique es solo de lectura
//     name: string
//     age: number
//     isActive?: boolean // <- poniendo el ? es opcional
//     powerScale?: HeroPowerScale
// }

// let hero: Hero = {
//         name: 'Hero',
//         age: 36
// }
    
// function createHero(hero: Hero): Hero {
//     const {  name, age } = hero
//     return {
//         id: crypto.randomUUID(),
//         name, 
//         age, 
//         isActive: true
//     } 
// }

// thor.powerScale = "multiversal"

// Intersections types

// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

// type HeroBasicInfo = {
//     name: string,
//     age: number,
// }

// type HeroProperties = {
//     readonly id?: HeroId,
//     isActive?: boolean ,
//     powerScale?: HeroPowerScale,
// }

// type Hero = HeroBasicInfo & HeroProperties
    
// let hero: Hero = {
//     name: 'Hero',
//     age: 36
// }

// function createHero(input: HeroBasicInfo): Hero {
//     const {  name, age } = input

//     return {
//         id: crypto.randomUUID(),
//         name, 
//         age, 
//         isActive: true
//     } 
// }

// thor.powerScale = "multiversal"

// Type Index

// type HeroProperties = {
//     isActive: boolean,
//     address: {
//         planet: string,
//         city: string,
//     }
// }

// const addressHero: HeroProperties["address"] = {
//     planet: "Earth",
//     city: "Madrid",
// }

// const address = {
//     planet: 'Earth',
//     city: 'Madrid',
// }

// type Address = typeof address

// const addressTwitch: Address = {
//     planet: 'Mars',
//     city: 'Twitch',
// }


// Type from function return

// function createAddress() {
//     return {
//         planet: 'Earth',
//         city: 'Barcelona'
//     }
// }

// type Address = ReturnType<typeof createAddress>

const languages: (string | number)[] = []; // Modo correcto de tipado

languages.push('Javascript');
languages.push(2);

/*  Tipado correcto 
[
['X', 'O', 'X'], <- string []
['O', 'X', 'O'], <- string []
['X', ' ', 'O']  <- string []
]
*/

type CellValue = 'X' | 'O' | ' '
type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

const gameBoard: CellValue[][] = [
    ['X', 'O', 'X'], 
    ['O', 'X', 'O'], 
    ['X', ' ', 'O']
] 

// Tuples

type RGB = [number, number, number]

const RGB = [255, 255, 0]