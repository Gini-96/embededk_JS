// event실습 4 : 성적처리 (동적 테이블 생성)
// 데이터 : 성명,국어,영어,수학
// 기능 : 등록, 삭제, 개인총점, 과목총점 연산

const texts = document.querySelectorAll('input[type="text"]');
const button = document.querySelector('button')
const tbody = document.querySelector('tbody')
console.log(texts);


button.addEventListener('click', () => {
    const tr = document.createElement('tr');
    scoreSum = 0;
    for (let i=0; i<texts.length;i++) {
        const th = document.createElement('th');
        th.appendChild(document.createTextNode(texts[i].value));
        tr.appendChild(th);
    }
    tbody.appendChild(tr);
});