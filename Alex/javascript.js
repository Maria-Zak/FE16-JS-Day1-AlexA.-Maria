document.write("<h1>Java Script Exercise</h1>");

//Basic exercise 1 - 4
console.log("Hello from the console");
let age = "39";
string2 = " And I\'am " + age + " years old.";
document.write("My name is Alex!");
document.write(string2);
let players = ["Martin", "Thomas", "Peter", "Mathias", "Niki"];
let playersTeamMeber = players[2];
console.log(playersTeamMeber);
console.log("The most valuable player of the match is " + playersTeamMeber + ".");

//Intermediate Exercise 1
let cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];
cars.sort();
console.log(cars);

//Exercise 2
console.log("Exercise 2")
let fruits = ["apple", "banana", "kiwi"];
console.log(fruits);
fruits.push("orange");
console.log(fruits);
fruits.pop();
console.log(fruits);

let animals = ["horse", "dog", "monkey"];
console.log(animals);
animals.reverse();
console.log(animals);
animals.unshift("cat");
console.log(animals);

//Exercise 3
document.write("<br>");
let fruits2 = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
let fruits_array = fruits2.split("/");
console.table(fruits_array);
fruits_array = fruits_array.join("<br>");
document.write(fruits_array);

//Solotion with a loop!
// document.write("<br>");
// document.write("<br>");
// for(let i=0; i <= fruits_array.length-1; i++)
// {
//     document.write(fruits_array[i]);
//     document.write("<br>");
// }

//Advanced Exercise 1
console.log("Advanced Exercise 1"); 
var  a = 7,
     b = 14,
     c = "21",
     d = "36",
     e = 42;

var sum = a + b + Number(c) + Number(d) + e;
console.log(sum);

var f = "1",
    g = 15,
    h = 8,
    i = "1";

var multiply = Number(f) * g * h * Number(i);
console.log(multiply);

//Exercise 2
console.log("Advanced Exercise 2");
var multi_array =
[
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 25, 7],
    [21, 4, 6, 17],
    [3, 5, 26, 3]
]

console.log(multi_array[1][1]);
console.log(multi_array[4][2]);
console.log(multi_array[5][3]);
console.log(multi_array[2][3]);
console.log(multi_array[2][1]);

var long_string = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.      $A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up"

var long_string_array = long_string.split("$");

console.table(long_string_array);

long_string_array = long_string_array.join(" ");
document.write("<br>");
document.write("<br>");

document.write(long_string_array);

var name_array = ["Maria", "Mona", "Daniela", "Stefan", "Alex"];

name_array.splice(2,1);
console.log(name_array)

var name1 = name_array.pop();
var name2 = name_array.pop();
name_array.pop();
name_array.push(name2);
name_array.push(name1);

console.log(name_array);

