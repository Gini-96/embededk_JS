/*
    표현식 (expression) : 파싱해서 값이 되는 문장
                            표현식은 변수에 할당하거나 함수에 인자가 될 수 있음
    문장 (statement) : 실행단위가 되는 구문
                            문장은 변수에 할당하거나 함수에 인자가 될 수 없음
*/

let i = 0; //문장
i = 3 // 표현식
// 값이 될수 있으면 표현식, 그렇지 않으면 문장

/*
    리터럴 (literal) : 코드에 쓰인 값
                        리터럴은 타입이 있음 (문자, 숫자, 객체, 함수 ...)
                        리터럴은 해석(parsing)될때 값으로 평가(evaluation)됨
    표현식 (expression) : 해석해서 값이 되는 문장
    문장 (statement) : 자바스크립트 엔진이 가져가서 해석하고 실행하는 단위
                        문장 끝에는 항상 ;을 붙여줘야 함
                        붙이지 않아도 엔진이 자동으로 붙여 주지만 의도와는 다르게 코드가 해석될 수
                        있기 때문에 붙여주는 것을 추천

    1. 자바스크립트의 변수 3가지
    1) var : 사용을 권장 하지 않음 (변수명이 중복이 가능 하기 때문에)
    2) let (ES6) : 변수
    3) const (ES6) : 상수 (초기화 되면 값을 변경할 수 없는 변수)

    2. 자바스크립트의 변수의 선언, 초기화, 할당
    1) 선언 (declaration) : J/S 에서 선언은 타입을 지정하지 않음. 단지 변수임만 선언
                            cf) java의 선언 : 변수의 이름과 타입을 지정
                                J/S의 선언 : 타입을 지정하지 않음
    2) 초기화 (initialization) : 변수에 값을 처음 할당함
    3) 할당 (assignment) : 변수에 값을 저장=대입
    * 자바스크립트는 변수값이 초기화되거나 할당 될때 타입이 지정됨 (동적타이핑=실행시점에 타입이 정해짐)
    * 만약에 자바스크립트 변수에 값이 변경되면 값의 타입에 따라서 변수의 타입이 변경됨
        ex let i = 0; // i 는 number 타입
            i = 'hello' // i 는 string 타입
*/

var v = 1; // 변수
console.log(v);

let l = 2; // 변수
console.log(l);

l = 5;
console.log(l);

const c = 3; // 상수
console.log(c);

// c = 5; // TypeError, 상수는 초기화 후 값 할당 불가

// 선언 : 변수명만 알 수 있음
let l2;
console.log(l2); // undefined 로 자동 초기화, 타입은 undefined

// 할당 : 자바스크립트는 변수에 값을 초기화 하거나 할당할때 변수의 타입이 정해짐
l2 = 3; // l2는 number 타입
console.log(l2);
console.log(typeof l2);

l2 = '3';
console.log(l2);
console.log(typeof l2);

// const c2; // SyntaxError, 상수는 반드시 초기화 해줘야 함
