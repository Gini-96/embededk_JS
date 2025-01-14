/*
    클래스(class)
    - ES6 에서 도입 (2015)
    - 내부적으로 함수로 평가됨 (타입이 function)
    - 클래스는 함수, 클래스는 값이 될 수 있는 일급객체
    - 변수에 저장 가능, 함수 파라미터로 전달도 가능, 함수 리턴값이 될 수 있음
    - extends 키워드로 상속 정의
    - constructor 로 생성자 생성, 생성자는 하나만, 없으면 기본생성자 자동 생성
    - static 프라퍼티는 클래스명으로 접근
    - get, set 키워드로 getter/ setter 생성
*/

// 클래스 선언
class Person {
    // 생성자 : 변수 초기화
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    // getter : 프로토타입 메소드
    get name() {
        return this._name // 순환참조를 방지 하기 위해 그냥 name 이 아니라 내부 변수를 불러오는 _name을 사용
    }
    // setter : 프로토타입 메소드
    set name(name) {
        this._name = name; // 순환참조를 방지 하기 위해 그냥 name 이 아니라 내부 변수를 불러오는 _name을 사용
    }
    // static 메소드 : 클래스명(함수명)으로 접근
    static printName(name) {
        console.log(name);
    }
}

// 객체 생성
const person1 = new Person('홍길동', 20);
const person2 = new Person('강감찬', 30);

// 프라퍼티 명과 생성자함수 파라미터 명이 같으면 RangeError 발생

// 프라퍼티 접근
// RangeError : name에 접근 > getter 호출 > name에 접근 ... (순환참조 발생)
console.log(person1.name);
person2.name = '장보고';
console.log(person2.name);

// 프라퍼티 변경
// RangeError : name에 접근 > setter 호출 > name에 접근 ... (순환참조 발생)
person1.name = '홍길순';
console.log(person1.name);
person2.age = 40;
console.log(person2.age);

// 클래스명으로 static 메소드 사용 = 생성자 함수의 메소드
Person.printName('이순신');
Person.printName('유관순');

// pdf 에는 순환 참조 방지를 위함 _ 가 수정되어 있지 않음 확인해 둘것













