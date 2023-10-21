// let rabbit = {}

// rabbit.speak = function (line) {
//     console.log(`The rabbit says: ${line}`)
// }

// rabbit.speak('Ey yo why am I a rabbit that talks? wtf')

// ////////this keyword//////////////////////////////////////////////////////

// function speak(line) {
//     console.log(`The ${this.type} rabbit says "${line}"`)
// }

// let redRabbit = { type: 'red', speak }
// let ravenousRabbit = { type: 'ravenous', speak }

// redRabbit.speak('I love the red color of my fur!')

// ravenousRabbit.speak('I would sure love to have some lettuce, corn, and carrots right now because I am famished')

// //another way to pass the this keyword into a function by passing it explicitly using the call method//

// speak.call(ravenousRabbit, 'Burp!')
// //the this keyword isnt used but it is stated explicitly here in the sense that we used the object's name instead of using the this keyword because by using the call method we can use the methods name and then pass any subsequent arguments into any remaining parameters. In other words, we explicitly stated the object's name since the this keyword takes the first slot in the call method; then we input the argument of 'Burp" into the speak function as the speak function argument: speak('Burp")//

// function normalize() {
//     console.log(this.coords.map(n => n / this.length))
// }

// normalize.call({ coords: [0, 2, 3], length: 5 })
//arrow functions can see the this keyword binding that is around them. So there isnt an object name in this case but the this keyword just applies to any arrow function called with the call method.

//////////////////////////////////////////////////////////////PROTOTYPES////////////////////////////////////////////////////////////////////////////////////
// let empty = {}
// console.log(empty.toString)
// console.log(empty.toString())

// console.log(Object.getPrototypeOf({}) == Object.prototype) //returns the boolean, true, because the prototype of Object is the OG ancestor, Object.prototype//

// console.log(Object.getPrototypeOf(Object.prototype)) //returns null because Object.prototype is the OG and doesnt have any ancestors of its own.

// console.log(Object.getPrototypeOf(Math.max) == Function.prototype) //Returns the boolean, true, because Math.max is a function so it makes sense that it's prototype is Function.prototype

// console.log(Object.getPrototypeOf([]) == Array.prototype) //Returns the boolean true because an array's OG prototpye is Array.prototype/

// let protoDog = {
//     speak: function speak(line) {
//         console.log(`The ${this.type} protoDog says "${line}"`)
//     }
//     //longhand way of writing the code below://
//     // speak(line){
//     //     console.log(`The ${this.type} protoDog says "${line}"`)
//     // }

// }

// let wolf = Object.create(protoDog)
// wolf.type = 'wolf'
// wolf.speak('AWOOOOOOOOOO')

//////////////////////////////////////////////////////////////////////////CLASSES//////////////////////////////////////////////////////////////////////////////

//Prototypes are useful for defining where instances of a class share the same value such as with their shared methods like the speak function/method above. But properties that differ in each instance like the wolf.type property, above that only exists in the wolf object, need to be stored directly in that new object itself.

//To create an instance of a given class,you have to make an object that derives from the proper prototype, but you also have to make sure it, itself, had the properties that that instance should have. We give each instance all the appropriate properites by using CONSTRUCTOR FUNCTIONS to create a blueprint for new objects you want to create.

// function makeDog(type) {
//     let wolf = Object.create(protoDog)
//     wolf.type = type
//     return wolf
// }

/////////////////////////////////////////////CLASS NOTATION///////////////////////////////////////////////////////////////////////////////////////////////////////

// class Rabbit {
//     constructor(type) {
//         this.type = type
//         //the this keyword here is bound the name Rabbit and would apply to any new objects created with this constructor like killerRabbit and blackRabbit below. The this keyword is explicitly tied to the rabbit class and is therfore tied to the constructor function because the constructor is bound to the class Rabbit; in this case the arguments passed into the constructor would be the type of rabbits: killer and black.
//     }
//     speak(line) {
//         console.log(`The ${this.type} rabbit says "${line}"`)
//     }
// }

// let killerRabbit = new Rabbit('killer')
// let blackRabbit = new Rabbit('black')
// console.log(killerRabbit)//returns the killerRabbit object with the type property set to 'killer'; type: 'killer
// console.log(blackRabbit)//returns the blackRabbit object with the type property set to 'black'; type: 'black'

// ///////////////////////////////////////////////////////////////OVERRIDING DERIVED PROPERTIES//////////////////////////////////////////////////////////////////////////

// Rabbit.prototype.teeth = 'small'
// console.log(killerRabbit.teeth)//gives killerRabbit the value of 'small' for the teeth property because it inherited that value from its prototype.

// killerRabbit.teeth = 'long, sharp, and bloody'
// console.log(killerRabbit.teeth)//give killerRabbit ITS OWN PROPERTY/VALUE pair for the teeth property, which overrides the property/value pair it inherited from its prototype. So now this line of code will print 'long, sharp, and bloody' to the console.
// console.log(blackRabbit.teeth)//prints 'small' to the console.
// console.log(Rabbit.prototype.teeth)//prints 'small' to the console as well.

//////////////////////////////////////////////////////////////////////          MAPS              /////////////////////////////////////////////////////////////////

// let ages = {
//     Boris: 39,
//     Liang: 22,
//     Julia: 62,
//     Fernando: 28
// }
// console.log(`Julia is ${ages.Julia}`)
// console.log('Is Jack\'s age known?', 'Jack' in ages)//false because we didnt map Jack's age into the object as a property.
// console.log('is toString\'s age known?', 'toString' in ages)//returns true because even though we dont have the property of toString explicity mapped out in our object, the Object.prototype does have toString as a property.

// /////better way to create a map or a data structure that associates values (the keys) with other values

// let ages = new Map()
// ages.set('Boris', 39)
// ages.set('Liang', 22)
// ages.set('Julia', 62)

// console.log(`Julia is ${ages.get('Julia')}`)
// console.log('Is Jack\'s age known?', ages.has('Jack')) //still false
// console.log(ages.has('toString')) //false now instead of true//

// //remember set, get, and has for sifting through a map data structure.


// // //if we have a plain object we want to treat as a map: useful to know that Object.keys returns only keys that the specific object owns or has inside it explicitly, not those in the prototype.
// console.log({ x: 1 }.hasOwnProperty('x'))//returns true because x is a property within that object
// console.log({ x: 1 }.hasOwnProperty('toString'))//returns false because toString isnt directly in that method even if it is in the prototype.

///////////////////////////////////////////////////////////////////////               POLYMORPHISM                  //////////////////////////////////////////////////////////
// class Rabbit {
//     constructor(type) {
//         3
//     }
//     speak(line) {
//         console.log(`The ${this.type} rabbit says "${line}"`)
//     }
// }
// let killerRabbit = new Rabbit('killer')
// let blackRabbit = new Rabbit('black')


// Rabbit.prototype.toString = function () {
//     return `a ${this.type} rabbit`
// }

// console.log(String(blackRabbit)) //without the code right above this, the only thing that would print to the console would be [object Object]. It prints out the actual string we put into the function above because we basically defined out own version of toString that specifically states what we want to return instead of just [object Object]

////////////////////////////////////////////////////////////////////////////////                SYMBOLS                     /////////////////////////////////////////////////////////////
// class Rabbit {
//     constructor(type) {
//         3
//     }
//     speak(line) {
//         console.log(`The ${this.type} rabbit says "${line}"`)
//     }
// }
// let killerRabbit = new Rabbit('killer')
// let blackRabbit = new Rabbit('black')



// let sym = Symbol('name') //sym assigned to

// console.log(sym == Symbol('name')) //prints the boolean value of false to the console because sym is unique and here the sym being compared is not our sym that we are using.

// Rabbit.prototype[sym] = 55

// console.log(blackRabbit[sym]) //prints 55 because blackRabbit goes all the way back to its prototype to find this property name that is represented with the symbol 'sym'

// const toStringSymbol = Symbol('toString')
// Array.prototype[toStringSymbol] = function () {
//     return `${this.length} cm of blue yarn`
// }

// console.log([1, 2].toString()) //prints '1,2' to the console
// console.log([1, 2, 3][toStringSymbol]()) //prints '3cm of blue yarn' to the console

////////////////////////////////////////////////////////////////          ITERATOR INTERFACE                   //////////////////////////////////////////////////////////////

// let okIterator = 'OK'[Symbol.iterator]()
// console.log(okIterator.next())
// // {value: 'O', done: false}
// console.log(okIterator.next())
// // {value: 'K', done: false}
// console.log(okIterator.next())
// // {value: undefined, done: true}




// class Matrix {
//     constructor(width, height, element = (x, y) => undefined) {
//         this.width = width
//         this.height = height
//         this.content = []

//         for (let y = 0; y < height; y++) {
//             for (let x = 0; x < width; x++) {
//                 this.content[y * width + x] = element(x, y)
//             }
//         }
//     }
//     get(x, y) {
//         return this.content[y * this.width + x]
//     }
//     set(x, y, value) {
//         this.content[y * this.width + x] = value
//     }
// }

// class MatrixIterator {
//     constructor(matrix) {
//         this.x = 0
//         this.y = 0
//         this.matrix = matrix
//     }
//     next() {
//         if (this.y == this.matrix.height) return { done: true }

//         let value = {
//             x: this.x,
//             y: this.y,
//             value: this.matrix.get(this.x, this.y)
//         }
//         this.x++
//         if (this.x == this.matrix.width) {
//             this.x = 0
//             this.y++
//         }
//         return { value, done: false }
//     }
// }

// Matrix.prototype[Symbol.iterator] = function () {
//     return new MatrixIterator(this)
// }

// let matrix = new Matrix(2, 2, (x, y) => `value ${x}, ${y}`)
// for (let { x, y, value } of matrix) {
//     console.log(x, y, value)
// }

//returns
// 0 0 'value 0, 0'
// 1 0 'value 1, 0'
// 0 1 'value 0, 1'
// 1 1 'value 1, 1'

////////////////////////////////////////                   GETTERS, SETTERS, AND STATICS                    ///////////////////////////////////////////////////

// let varyingSize = {
//     get size() {
//         return Math.floor(Math.random() * 100)
//     }
// }

// console.log(varyingSize.size)
// console.log(varyingSize.size)


// class Temperature {
//     constructor(celsius) {
//         this.celsius = celsius
//     }
//     get fahrenheit() {
//         return this.celsius * 1.8 + 32
//     }
//     set fahrenheit(value) {
//         this.celsius = (value - 32) / 1.8
//     }
//     static fromFahrenheit(value) {
//         return new Temperature((value - 32) / 1.8)
//     }
// }

// let temp = new Temperature(22)
// console.log(temp.fahrenheit)
// temp.fahrenheit = 86
// console.log(temp.celsius)


// console.log(Temperature.fromFahrenheit(102))

////////////////////////////////////////////////////                    INHERITANCE                                   ///////////////////////////////////////////////////////

// class Matrix {
//     constructor(width, height, element = (x, y) => undefined) {
//         this.width = width
//         this.height = height
//         this.content = []

//         for (let y = 0; y < height; y++) {
//             for (let x = 0; x < width; x++) {
//                 this.content[y * width + x] = element(x, y)
//             }
//         }
//     }
//     get(x, y) {
//         return this.content[y * this.width + x]
//     }
//     set(x, y, value) {
//         this.content[y * this.width + x] = value
//     }
// }

// class SymmetricMatrix extends Matrix {
//     constructor(size, element = (x, y) => undefined) {
//         super(size, size, (x, y) => { ///super in this example refers to the class Matrix because class Matrix is the superclass from which this SymmetricMatrix inherits from.
//             if (x < y) return element(y, x)
//             else return element(x, y)
//         })
//     }
//     set(x, y, value) {
//         super.set(x, y, value) ///super in this example refers to the class Matrix because class Matrix is the superclass from which this SymmetricMatrix inherits from.
//         if (x != y) {
//             super.set(y, x, value)
//         }
//     }
// }

// let matrix = new SymmetricMatrix(5, (x, y) => `${x}, ${y}`)
// console.log(matrix.get(2, 3))

// ///////////////////////////////////////////////                    instanceof Operator         //////////////////////////////////////////////////

// console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix)//returns true

// console.log(new SymmetricMatrix(2) instanceof Matrix)//returns true because SymmetricMatrix is an instance of Matrix

// console.log(new Matrix(2, 2) instanceof SymmetricMatrix) //returns false because Matrix is the superclass to be inherited from and not the other way around.

// console.log([1] instanceof Array) //return true

/////////////////////////////////////////////////////                            EXERCISES                                /////////////////////////////////////////////


//#1 ////////////////////
// class Rabbit {
//     constructor(type) {
//         3
//     }
//     speak(line) {
//         console.log(`The ${this.type} rabbit says "${line}"`)
//     }
// }
// let killerRabbit = new Rabbit('killer')
// let blackRabbit = new Rabbit('black')

// class Vec {
//     constructor(x, y) {
//         this.x = x
//         this.y = y
//     }
//     plus(z) {
//         return new Vec(this.x + z.x, this.y + z.y)
//     }
//     minus(z) {
//         return new Vec(this.x - z.x, this.y - z.y)
//     }
//     get length() {
//         return Math.sqrt(this.x * this.x + (this.y * this.y))
//     }
// }

// console.log(new Vec(1, 2).plus(new Vec(2, 3)))

// console.log(new Vec(1, 2).minus(new Vec(2, 3)))

// console.log(new Vec(3, 4).length)

//#2///////////////////////////

// class Group {
//     constructor() {
//         this.array = []
//     }
//     add(value) {
//         if (this.array.includes(value)) {
//             return 'Value already in array'
//         } else {
//             return this.array.push(value)
//         }
//     }
//     delete(value) {
//         if (this.array.includes(value)) {
//             return this.array.filter((value) => value == value)
//         }
//     }
//     has(value) {
//         return this.array.includes(value)
//     }
//     static from(x) {
//         let a = new Group()
//         for (let i = 0; i < x.length; i++) {
//             let element = x[i]
//             a.add(element)
//         }
//         return a
//     }
// }

// let group = Group.from([10, 20])
// console.log(group.has(10))//should be true
// console.log(group.has(30))//should be false
// group.add(10);
// group.delete(10);
// console.log(group.has(10))//should be false

//#3////////////////////////////////////////////


// class Group {
//     constructor() {
//         this.group = []
//     }
//     add(value) {
//         if (this.group.includes(value)) {
//             return 'Value already in array'
//         } else {
//             return this.group.push(value)
//         }
//     }
//     delete(value) {
//         let index = this.group.indexOf(value);
//         if (index !== -1) {
//             this.group.splice(value, 1);
//         }
//     }
//     has(value) {
//         return this.group.includes(value)
//     }
//     static from(x) {
//         let a = new Group()
//         for (let i = 0; i < x.length; i++) {
//             let element = x[i]
//             a.add(element)
//         }
//         return a
//     }
//     [Symbol.iterator]() {
//         return new GroupIterator(this)
//     }
// }
// class GroupIterator {
//     constructor(w) {
//         this.i = 0
//         this.group = w.group
//     }
//     next() {
//         if (this.i == this.group.length || this.i > 10) return { done: true }

//         let number = this.group[this.i]
//         this.i++
//         return { number, done: false }
//     }
// }

// for (let value of Group.from(['a', 'b', 'c'])) {
//     console.log(value)
// }


///////////    #4  ///////////////////

// let map = { one: true, two: true, hasOwnProperty: true }

// console.log(hasOwnProperty.call(map, 'one'))