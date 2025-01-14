/*
    배열 (Array)
    - 자바스크립트 배열의 특징
    1. 어떤 타입의 값도 저장 가능
    2. 배열의 크기가 동적으로 늘어남 (크기를 지정할 필요가 없음)
    3. 값을 인덱스에 연속적으로 저장할 필요가 없음
    4. 유사배열객체나 이터러블을 배열로 변환 가능
*/

// 배열의 크기, 인덱스를 통한 요소 접근
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1.length);
console.log(arr1[0]);
console.log(arr1[2]);

// 동적 배열 요소 추가
arr1[5] = 6;
console.log(arr1.length);
console.log(arr1);

arr1[100] = 101;
console.log(arr1.length);
console.log(arr1); // 희소배열 (sparse array)
console.log(arr1[50]);

// 배열 생성법
const arr3 = [1,2,3,4,5]; // 배열 리터럴

const arr4 = new Array(10); // Array 생성자 함수, 크기가 10인 배열
console.log(arr4.length);
console.log(arr4);

const arr5 = new Array(1,2,3);
console.log(arr5.length);
console.log(arr5);

const arr6 = Array.of(1);
console.log(arr6.length);
console.log(arr6);

const arr7 = Array.of(1,2,3);
console.log(arr7.length);
console.log(arr7);

const arr8 = Array.from({length:2, 0:'a', 1:'b'});
console.log(arr8.length);
console.log(arr8);

const arr9 = Array.from('Hello');
console.log(arr9.length);
console.log(arr9);

// 배열 요소 삭제
const arr10 = [1,2,3,4,5];
delete arr10[0];
console.log(arr10.length);
console.log(arr10);

arr10.splice(1,1);
console.log(arr10.length);
console.log(arr10);

arr10.splice(0,3,2); // 0번 인덱스에서 1개 요소를 제거 하고 2를 추가
console.log(arr10.length);
console.log(arr10);
















