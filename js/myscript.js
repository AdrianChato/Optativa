/*alert("Hola mundo");

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
*/
var third_array = new Array (3,9,1,2,6,8,0,5,7235,52,53,345,43,6,346,345,65,36,35,5);

/*for(var i = 0; third_array.length > i; i++) {
    console.log(third_array[i]);
}*/

/*for (var i =third_array.length-1;i>=0;i--) {
    console.log(third_array[i]);
}*/

/*var i = third_array.length-1;
for (;i>=0;i--) {
    console.log(third_array[i]);
}*/

/*third_array.forEach(function myFunction(item) {
  console.log(item); 
});*/

/*let today = new Date();
let first_october= new Date (2022,9,1);
console.log(today);
console.log(first_october);
console.log(today.getDay());

if (today>first_october){
    console.log("Es mayor today")
} else {
    console.log("Es menor today")
}*/

let testString = 'test';

function myFirstFunction () {
    console.log("Thank for you click");
}

function mySecondFunction() {
    console.log("Thank you for you interest.");
}

function myThirdFunction(testString) {
    console.log("Pesao");
    console.log(testString);
}

var div = document.getElementById("my_div");
div.classList.add("my_class");
console.log(div);

var div2 = document.getElementsByTagName("div");
console.log(div2);

var second_div = document.querySelector(".my_class");
console.log(second_div);

function $(selector) {
    return document.querySelectorAll(selector);
}
console.log($("#my_third_div"));
console.log($(".my_class"));