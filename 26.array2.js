/*
    고차함수 (high order function) : 함수를 인자로 전달받는 함수
    콜백함수 (callback function) : 인자로 전달되는 함수
*/

// 배열 메소드

const arr = [1, 10, 9, 4, 5];

console.log(Array.isArray(arr));
console.log(arr.indexOf(10));
console.log(arr.includes(9));

// stack
console.log(arr.push(7)); // 배열 맨 뒤에 요소를 삽입하고 배열의 크기를 반환
console.log(arr.pop()); // 배열 맨 뒤에 요소를 제거하고 제거된 요소를 반환

// queue
console.log(arr.unshift(2)); // 배열의 맨 앞에 요소를 삽입하고 배열의 크기를 반환
console.log(arr.shift()); // 배열의 맨 앞에 요소를 제거하고 제거된 요소를 반환

console.log(arr.concat(3,8)); // 배열 3, 8 추가

console.log(arr.splice(1,2)); // 1번 인덱스에서 2개 요소 제거
console.log(arr.splice(1,2,3,4)); // 1번 인덱스에서 2개 요소 제거한 후 3,4 추가

console.log(arr.slice(1,3)); // 1번 인덱스에서 3번 인덱스 전까지의 부분 배열

console.log(arr.join()); // 요소들을 붙인 문자열로 반환

console.log(arr.reverse()); // 요소 순서를 180도 회전

console.log(arr.fill(10)); // 모든 요소를 10으로 채움

const arr2 = [[1,2],[3,4]];
console.log(arr2.flat()); // 평탄화

// 배열 고차 함수
const arr3 = [1, 2, 3, 4, 5];

// 배열의 각 요소마다 콜백함수를 실행 (반환 없음)
const forEachArr = arr3.forEach(function(ele) {
    console.log(ele);
});
console.log(forEachArr);

// 배열의 각 요소마다 콜백 함수를 실행하고 결과 배열을 반환
const mapArr = arr3.map(function(ele) {
   return ele ** ele; 
});
console.log(mapArr);

// 배열의 각 요소마다 콜백함수를 실행하고
// 콜백함수의 결과가 true 인 요소들의 배열을 반환
const filterArr = arr3.filter(function(ele) {
    return ele %2;    
});
console.log(filterArr);

// 배열의 각 요소에 콜백함수를 실행하고
// 실행 결과를 다음번 콜백함수 호출시에 전달
// acc : 누적변수, curr : 현재요소
// acc = 0, curr = 1
// acc = 1, curr = 2
// acc = 3, curr = 3
// acc = 6, curr = 4
// acc = 10, curr = 5
// acc = 15
const sum = arr3.reduce(function(acc,curr) {
    return acc + curr;
}, 0); // acc 의 초기값 0
console.log(sum);

// 콜백함수의 결과가 true인 경우가 있으면 true
const some = arr3.some(function(ele) {
    return ele == 5;
});
console.log(some);

// 콜백함수의 결과가 모두 true인 경우 true
const every = arr3.every(function(ele) {
    return ele < 10;
});
console.log(every);

// 콜백함수의 결과가 true인 첫번째 요소 반환
const find = arr3.find(function(ele) {
    return ele < 3;
});
console.log(find);

// 콜백함수의 결과가 true인 첫번째 요소의 인덱스를 반환
const findIndex = arr3.findIndex(function(ele) {
    return ele > 3;
});
console.log(findIndex);

// sort 고차함수
const numbers = [4, 2, 9, 1, 5];
numbers.sort((a,b) => a-b); // 오름차순 정렬
console.log(numbers);

numbers.sort((a,b) => b-a); // 내림차순 정렬
console.log(numbers);

const words = ['banana', 'apple', 'cherry','peach'];
words.sort(); // 오름차순 정렬
console.log(words);

words.sort((a,b) => (a<b ? 1 : -1)); // 내림차순 정렬
console.log(words);

const people = [
    {name : '홍길동', age : 20},
    {name : '이순신', age : 40},
    {name : '강감찬', age : 30}
]

// age 오름차순 / 내림차순 정렬
people.sort((a,b) => a.age - b.age);
console.log(people);

people.sort((a,b) => b.age - a.age);
console.log(people);

// name 오름차순 / 내림차순 정렬
people.sort((a,b) => (a.name > b.name ? 1 : -1)); // 오름차순
console.log(people);

people.sort((a,b) => (a.name < b.name ? 1 : -1)); // 내림차순
console.log(people);

// 문자열 길이 오름차순 / 내림차순
const fruits = ['apple', 'banana', 'pineapple', 'pear'];

fruits.sort((a,b) => a.length - b.length);
console.log(fruits);

fruits.sort((a,b) => b.length - a.length);
console.log(fruits);

// 짝수를 앞에, 홀수를 뒤에 정렬
const nums = [5, 8, 3, 10, 1, 4];

nums.sort((a, b) => {
    if (a%2 == 0 && b%2 != 0) return -1; // a 짝수, b 홀수 a 앞으로
    if (a%2 != 0 && b%2 == 0) return 1; // a 홀수, b 짝수 b가 앞으로
    return a - b; // 둘다 짝수이거나 둘 다 홀수 인 경우 오름차순
});
console.log(nums);

//중첩 배열의 첫번째 원소 기준 오름차순 정렬
const nested = [[3,4], [1,2], [5,6], [0, 1]];

nested.sort((a,b) => a[0] - b[0]);
console.log(nested);

// 점수에 대해 내림차순 정렬, 점수가 같으면 이름에 대해 오름차순 정렬
const students = [
    {name : '홍길동', score : 65},
    {name : '이길동', score : 95},
    {name : '최길동', score : 65},
    {name : '김길동', score : 55}
];

students.sort((a,b) => {
    if (b.score != a.score) return b.score - a.score;
    return (a.name>b.name) ? 1 : -1;
})
console.log(students);

// item 숫자 기준으로 오름차순 정렬
const items = ['item20', 'item3', 'item100', 'item1'];
items.sort((a,b) => +a.substring(4) < +b.substring(4)? -1 : 1);
console.log(items);

const items2 = ['item20', 'item3', 'item100', 'item1'];
items2.sort((a,b) => +a.slice(4) < +b.slice(4)? -1 : 1);
console.log(items2);

// 나이 기준으로 내림차순 정렬, 나이가 같으면 풀네임 내림차순 정렬
const obj = [
    {name : {fname : '길동', lname : '홍'}, age : 30},
    {name : {fname : '순신', lname : '이'}, age : 20},
    {name : {fname : '감찬', lname : '강'}, age : 40},
    {name : {fname : '영', lname : '최'}, age : 20},
    {name : {fname : '관순', lname : '유'}, age : 20}
];

obj.sort((a,b) => {
    if (a.age != b.age) return a.age - b.age;
    return ((a.name.lname+a.name.fname)<(b.name.lname+b.name.fname) ? -1 : 1);
});

console.log(obj);

// 배열 고차함수 실습

let arr1 = [1, '2', 3, '4', 5, '6', 7, '8'];
console.log(arr1);

// 1. arr1 배열의 모든 요소를 숫자타입으로 변경 (forEach 사용)
const forEachTest = arr1.forEach(function(ele) {
    1*ele;
});
console.log(arr1);

arr1.forEach(ele => +ele);
arr1.forEach(ele => console.log(typeof +ele));


// 2. arr1 배열의 모든 요소를 3배한 배열을 출력 (map 사용)
const mapTest = arr1.map(function(ele) {
    return 3*ele;
});
console.log(mapTest);


// 3. arr1 배열의 요소 중 5의 배수가 있는지 확인 (some 사용)
const someTest = arr1.some(function(ele) {
    return ele%5==0;
});
console.log(some);

// 4. arr1 배열의 모든 요소가 짝수인지 확인 (every 사용)
const everyTest = arr1.every(function(ele) {
    return ele%2==0;
});
console.log(everyTest);

// 5. arr1 배열의 모든 요소의 합을 출력 (reduce 사용)
const reduceTest = arr1.reduce(function(acc, curr) {
    return (+acc) + (+curr);
}, 0);
console.log(reduceTest);

// 6. arr1 배열에서 3의 배수들만 추출하여 배열 생성해 출력 (filter 사용)
const filterTest = arr1.filter(function(ele) {
    return ele%3==0;
});
console.log(filterTest);

// 7. arr1 배열에서 짝수들만 추출하여 각각 3배한 배열의 합계를 출력
//    (filter, map, reduce 사용)
const multiTest = arr1.filter(function(ele) {
    return ele%2==0;}).map(function(ele) {
        return ele*3;}).reduce(function(acc, curr) {
            return acc + curr;
        }, 0);
console.log(multiTest);

const persons = [
    {name:'홍길동', age:20, address:{si:'서울시', dong:'역삼동'}},
    {name:'이길동', age:40, address:{si:'서울시', dong:'신사동'}},
    {name:'김길동', age:30, address:{si:'서울시', dong:'논현동'}},
    {name:'최길동', age:60, address:{si:'평양시', dong:'평양동'}},
    {name:'박길동', age:50, address:{si:'개성시', dong:'개성동'}}
];

// 1. 서울시에 사는 사람들의 나이의 합계를 출력
const persons1 = persons.filter(
    ele => ele.address.si=='서울시')
    .reduce((acc, curr) =>
     acc+curr.age, 0);
console.log(persons1);


// 2. 서울시에 살며 30세 이상인 사람들만 추출한 배열 출력
const persons2 = persons.filter(ele => ele.age >= 30);
console.log(persons2);

// 3. 각 사람의 주소 중 시이름에서 '시' 동이름에서 '동'을
//    제거하고 이름, 나이, 주소를 출력    ex) 홍길동,20세,서울 역삼
persons.forEach(
    ele => console.log(
        ele.name+','+ele.age+'세,'+ele.address.si.substring(0,2)+' '+ele.address.dong.substring(0,2)
));
console.log(' ');

// 4. 각 사람의 주소에 contury:'대한민국'을 추가하고
//    이름, 나이, 주소를 출력    ex) 홍길동,20세,대한민국 서울 역삼

// for (i=0; i<persons.length; i++) {
//     persons[i].address.country = '대한민국';
// }

console.log(persons);


persons.forEach(
    ele => {
        ele.address.country = '대한민국';
        console.log(
        ele.name+','+ele.age+'세,'+ele.address.country+' '+ele.address.si.substring(0,2)+' '+ele.address.dong.substring(0,2)
)});









