/*
let name = prompt("이름을 입력하세요");
let age = prompt("나이를 입력하세요");

// 객체

let person = {
  //키 : 값

  name: name,
  age: age,
};
// 위 아래 동일한 코드
let person = {
  name,
  age,
};
*/
/*
const dog = {
  name: "바둑이",
  legs: 2,
  color: "black",
  speak: function () {
    console.log("왕왕");
    console.log("this.name");
  },
};
*/
// 생성자 함수 = 틀 ,껍데기
/*
function Animals(1,2) {
    this.name = 
    this.age = 
}

//코드 한줄로 객체를 생성 -> new 연산자를 사용
let dog = new Animals("하늘이",18);
let cat = new Animals("흑당이",8);


let dog = {
    name: "하늘이"
    age: 18
}

let cat = {
    name: "흑당이"
    age: 8
}
*/
function Animals(name, legs) {
  this.name = name;
  this.legs = legs;
}

let dog = new Animals("바둑이", 4);
let bird = new Animals("짹짹이", 2);

console.log(dog.name);
console.log(bird.name);
