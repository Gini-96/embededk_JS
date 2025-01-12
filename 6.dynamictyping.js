/*
    동적타이핑 (dynamic typing)
    : 실행시간 (runtime)에 변수의 타입이 결정되고 변경도 가능
    : 인터프리터 언어의 특성
*/

let l;
console.log(typeof l); // undefined

l = 1;
console.log(typeof l); // number

l = 'hello';
console.log(typeof l); // string

l = false;
console.log(typeof l); // boolean

l = Symbol();
console.log(typeof l); // symbol

l = {};
console.log(typeof l); // object

l = null;
console.log(typeof l); // object

l = [];
console.log(typeof l); // object

l = /[abc]/;
console.log(typeof l); // object

l = function() {};
console.log(typeof l); // object

const obj1 = {};
console.log(obj1 instanceof Object);
console.log(obj1 instanceof Array);
console.log(obj1 instanceof Function);
console.log('');

const obj2 = null;
console.log(obj2 instanceof Object);
console.log(obj2 instanceof Array);
console.log(obj2 instanceof Function);
console.log('');

const obj3 = function() {};
console.log(obj3 instanceof Object);
console.log(obj3 instanceof Array);
console.log(obj3 instanceof Function);
console.log('');

// 모든 function 은 object이지만 모든 object가 function인 것은 아님

const obj4 = [];
console.log(obj4 instanceof Object);
console.log(obj4 instanceof Array);
console.log(obj4 instanceof Function);
console.log('');


