//alert("Hola mundo");

console.log("Hola k ase");

var table = "Normal table"; // varaibles grandes
let chair = "One chair"; // variables pequeñas
console.log(table);
console.log(chair);
let testBoolean = true;
console.log(testBoolean);

let testNumber = 10;
console.log(testNumber);

let testString = 'test';
console.log(testString);

let testBooleanObject = new Boolean(true);
console.log(testBooleanObject);

let testNumberObject = new Number(10);
console.log(testNumberObject);

let testStringObject = new String('text');
console.log(testStringObject);
console.log(testStringObject.toUpperCase);

let concatenar = "How are you "+chair+" "+table+"";
console.log(concatenar);

let concatenar2 = `How are you ${chair} ${table}?`;
console.log(concatenar2);

let operador_a = 3;
let operador_b = 3;

let expo = operador_a ** operador_b;
let inc = ++operador_a;
let dec = --operador_a;

console.log(expo);

console.log(inc);
console.log(dec);

console.log(typeof(testBoolean));
console.log(typeof(testNumber));
console.log(typeof(testString));
console.log(typeof(testBooleanObject));

var firts_array = [];
var second_array = new Array(3);
var third_array = new Array (3,5,7);
var third_array2 = new Array (3,5,7);
var fourth_array = new Array (3,5,"Sevilla", true, third_array);

console.log(firts_array);
console.log(second_array);
console.log(third_array);
console.log(fourth_array);

console.log(third_array[1]);
console.log(fourth_array[4] [0]);

console.log(fourth_array.push("Spain"));
console.log(fourth_array[5]);

third_array[1] = 8;
console.log(third_array);

var arrayfinal = new Array (third_array,third_array2);
console.log(arrayfinal);

arrayfinal[1][1] = 6;
console.log(arrayfinal);

