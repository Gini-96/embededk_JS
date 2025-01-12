console.log(1 + '00'); // 100 문자열
console.log(100 + 'hello'); // 100hello 문자열

console.log(1=='1'); // true, == : 타입을 변환해서라도 값이 같으면 true
console.log(1==='1'); // false, === : 값과 타입이 모두 같으면 true

console.log(NaN==NaN); // false
console.log(Object.is(NaN, NaN)); // true

console.log(2**3); // 2^3 = 8

const hong = {
    name : '홍길동',
    age : 20
};

// optional chaining 연산자
// 프라퍼티가 null이나 undefined 이면 undefined 반환
// 그렇지 않으면 프라퍼티의 값을 반환
console.log(hong?.name); // null 방지

console.log(hong?.hobby);

// null coalescing 연산자
// 프라퍼티의 값이 null또는 undefined 이면 우항의 값을 반환
// 그렇지 않으면 프라퍼티의 값을 반환
console.log(hong.name??'강감찬'); // 홍길동
console.log(hong.address??'서울시'); // 서울시

// 객체의 프라퍼티 제거 연산자
delete hong.name;
console.log(hong);

// 객체 내의 프라퍼티 존재 여부 확인 연산자
console.log('age' in hong);
console.log('name' in hong);
