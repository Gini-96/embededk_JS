// event실습 3 : 입력필드 검증 (validation)
// 전송버튼을 클릭하면...
// 1. 아이디, 비밀번호는 12자 이하
// 2. 성별은 필수 체크
// 3. 취미는 2개 이상 선택
// 4. 자기소개는 최소 10자에서 최대 50자 (선택)
// 조건을 모두 만족하면 '폼이 전송되었습니다' 알람
// 그렇지 않으면 해당 폼에 포커스

//초기화버튼 클릭하면 폼 초기화

const form = document.querySelectorAll('form[name="writeForm"]')[0];

console.log(form[type='checkbox']);
console.log(form[type='checkbox']);


document.getElementById('submit').addEventListener('click', () => {
     if (form['uid'].value.length>12) {
        alert('12자를 넘길수 없습니다');
        form['uid'].focus();
    } else if (form['upass'].value.length>12) {
        alert('12자를 넘길수 없습니다');
        form['upass'].focus();
    } else if (form['gender'].value!='on') {
        alert('성별을 체크해야 합니다');
    } else if (form[type="checkbox"])

    console.log(form[type="checkbox"]);
    
});
