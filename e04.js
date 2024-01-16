/*var user = " kwon ";
user = user.trim();
console.log(user);
*/

var 자바 = "자바";
console.log(자바.length);

var 스크립트 = "스크립트";
console.log(스크립트.length);

var 자바스크립트 = "자바+스크립트";
console.log(자바스크립트.length);

var 인사 = "안녕하세용";
console.log(인사[0]);

var 암호1 = "안녕하세요";
var 암호2 = "지금당장";
var 암호3 = "메시만나러";
var 암호4 = "마약의나라";
var 암호5 = "시시콜콜";
var 암호6 = "판떼기";
console.log(암호1[2] + 암호2[0] + 암호3[0] + 암호4[0] + 암호5[1] + 암호6[1]);

var 인사 = "안녕하시렵니까";

console.log(인사.charAt(2));

var 긴문자열 = " 이 문자열은 참 깁니다";
console.log(긴문자열.slice(2));

var 긴문자열 = "이 문자열은 참 깁니다";
console.log(긴문자열.slice(2, 5));

var every = "Boys and Girls";
var replace = every.replace("and", "or");
console.log(replace);

var every = "Boys and Girls";
var sub = every.split("");

console.log(sub[3]);

console.log("Hello There, how are you doing?".toUpperCase());

var 고칠문자열 = "hellO There, HOw are YoU DoiNG?";
var 소문자 = 고칠문자열.toLowerCase();
var 첫글자 = 소문자[0];
var 첫글자대문자 = 첫글자.toUpperCase();
var 나머지 = 소문자.slice(1);

console.log(첫글자대문자 + 나머지);
