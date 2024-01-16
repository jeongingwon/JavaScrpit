// 문제 1
var x = 5;
var y = 3;
var z = x + y;

console.log("x와 y 의 합은", z);

// 문제 2
var x = 10;
var y = 5;
var z = x - y;

console.log("x와 y 의 차는", z);

// 문제 3
var x = 2;
var y = 5;
var z = x * y;

console.log("x와 y 의 합은", z);

// 문제 4

var x = 5;
var y = 2;
var z = x / y;

console.log("x,y를 나누게되면", z);

// 문제 5

var x = 15;
var y = 2;
var z = x % y;
console.log("x를 y로 나눈 나머지값은:", z);

// 문제 6

var x = 5;
var y = ++x;

console.log("증가연산자", y);

// 문제 7

var x = 5;
var y = --x;

console.log("감소연산자", y);

// 문제 8
var str1 = "자바스크립트";
var str2 = "첫 번째 실습";
var str3 = str1 + "  " + str2;

console.log("연결된 문자열:", str3);

// 문제 9

var x = "Hello";
var y = 123;
var z = x + y;

console.log("문자열과 연결된 숫자형:", z);

// 문제 10

var str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var srt2 = console.log(str1.length);

// 문제 11

var str1 = "Hello, java";
var str2 = str1.replace("java", "world");

console.log(str2);

// 문제 12-1

console.log("hello, javascript".toUpperCase());

// 문제 12-2
/*
console.log("HELLO, JAVASCRIPT".tolowerCase());
*/

// 문제 13

var str = "a,b,c,d,e,f";
var sub = str.split("");

console.log(sub[2]);

// 문제 14

var x = 32;
var total = 100 + (x * 2) / 4 - 3;
var div = x / 10;
var mod = x % 2;

// 문제 15

var x = 3;
var y = 3;
var z = 3;

console.log(("x+=3실행후 x는", (x += 3)));
console.log(("y+=3실행후 y는", (y *= 3)));
console.log(("z+=3실행후 z는", (z /= 3)));

// 문제 16
/*
var x = 13;
var y = 7;

console.log(x == y);
console.log(x != y);
console.log(x >= y);
console.log(x > y);
console.log(x <= y);
console.log(x < y);
*/
// 문제 17번

var x = true;
var y = false;

console.log(x && y);
console.log(x || y);
console.log(!x);
console.log(3 > 2 && 3 < 4);
console.log(3 == -2 || -1 < 0);
