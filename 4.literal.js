/*
    리터럴 (literal) : 코드에 쓰인 값 (개발자 입장에서의 값)
                        리터럴이 평가 (evaluation) 되면 메모리에 값이 됨
    
    자바스크립트를 구성하는 모든것은 문자열임
    
    자바스크립트 엔진은 문자열을 해석(parsing) 해서
    평가(evaluation)한 후 실행(execution) 한다
*/

// number literal : JS 의 수는 64비트 부호화 실수
console.log(10); // 정수
console.log(3.14); // 실수
console.log(0b00000010); // 2진수
console.log(0o111); // 8진수
console.log(0xff); // 16진수

// string literal : JS 는 문자열과 문자를 구분하지 않음
console.log('hello');
console.log("hello");
console.log(`hello`); // esc 및에 있는 백틱

// boolean literal
console.log(true);
console.log(false);

// null literal
console.log(null);

// undefined literal
console.log(undefined);

// object literal
console.log({name:'홍길동', age:20});

// array literal
console.log([1, 2, 3]);

// function literal
console.log(function f() {});

// regular expression literal
console.log(/[A-Z]/);

// 평가 (evaluation) 
let result = eval('3+5'); // eval 함수는 보안상 사용하지 않는것이 좋음(해킹에 취약)
console.log(result);

eval("function func(){console.log('hello')};");
/*
    function func() {
        console.log('hello');
    }
*/ // 와 같음
func();



