// closure (클로져)
// outer 함수가 inner를 반환하므로 outer 함수가 실행을 종료해도
// inner 함수가 outer함수의 x를 참조할 수 있게 됨
// 이때 이미 종료된 outer 함수의 변수에 접근할 수 있는 중첩함수인
// inner를 outer의 클로져라 부름

const x = 1;
function outer() {
    const x = 10;
    const inner = function() {
        console.log(x);
    };
    return inner;
}
const innerFunc = outer();
innerFunc();

// 클로져의 활용
// counter 변수를 즉시 실행함수에 가둬서(정보은닉, 캡슐화)
// 외부에서 counter 변수에 접근하는 것을 차단
// 즉 increase, decrease 함수를 통해서만 접근가능하도록 하기 위함
const counter = (function() {
    let counter = 0; // outer 의 변수
    return function(func) { // 클로져
        counter = func(counter);
        return counter; // outer의 변수 리턴
    };
}());

function increase(n) {return ++n};

function decrease(n) {return --n};

function double(n) {
    if (n!==0) {
        return n*n
    } else return 0;
};

console.log(counter(double));

console.log(counter(increase));
console.log(counter(increase));

console.log(counter(double));

console.log(counter(decrease));
console.log(counter(decrease));

console.log(counter(double));

const string = (function() {
    let str = '';
    return function(func) {
        str = func(str);
    };
}());



