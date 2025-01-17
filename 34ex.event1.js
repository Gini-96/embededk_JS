// event 실습 1 : 숫자 카운터 만들기
// 증가버튼 클릭시 1씩 증가
// 감소버튼 클릭시 1씩 감소
const counter = document.getElementById('counter');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');

console.log(counter);

increaseBtn.addEventListener('click', () => {
    // counter.setAttribute('value', +(counter.getAttribute('value'))+1);
    counter.value = +(counter.value)+1;
});

decreaseBtn.addEventListener('click', () => {
    // counter.setAttribute('value', +(counter.getAttribute('value'))-1);
    counter.value = +(counter.value)-1;
});

// 실습 1-1 : input에 값을 직접 입력 못하도록
console.log(counter);
counter.addEventListener('focus', () => {
    counter.style.backgroundColor = 'gray';
    counter.blur();
    // return false; 도 가능
})
counter.addEventListener('focusout', () => {
    counter.style.backgroundColor = 'white';
})