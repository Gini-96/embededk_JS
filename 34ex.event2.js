// event 실습 2 : 배경색 변경
// outer 클릭시 outer 배경색상 임의 색상으로 변경
// inner 클릭시 outer, inner 배경색상 임의 색상으로 변경
// button 클릭시 btn, outer, inner 배경색상 임의색상으로 변경

const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const btn = document.getElementById('btn');

const randomColor = function() {
    return `rgb(
        ${Math.floor(Math.random()*256)},
        ${Math.floor(Math.random()*256)},
        ${Math.floor(Math.random()*256)}
    )`;
}
/*
// 버튼을 누를 때마다 해당 area를 제외한 나머지를 초기화 한다는 생각으로 코드 작성
outer.addEventListener('click', event=>{
    outer.style.backgroundColor = '';
    btn.style.backgroundColor = '';
    if (event.target==outer) {
        outer.style.backgroundColor = randomColor();
        inner.style.backgroundColor = 'white';
    }
    if (event.target==inner) {
        outer.style.backgroundColor = randomColor();
        inner.style.backgroundColor = randomColor();
    }
    if (event.target==btn) {
        inner.style.backgroundColor = randomColor();
        outer.style.backgroundColor = randomColor();
        btn.style.backgroundColor = randomColor();
    }
});
*/

// 강사님은 버튼을 누를 경우 한번 바뀐 값이 있을 경우 그 바뀐 값이 유지 되도록 코드 작성하심
outer.addEventListener('click', event=>{
    const prevInnerBackgroundColor
        = inner.style.backgroundColor ?
        inner.style.backgroundColor : 'rgb(255,255,255)';
    switch (event.target.id) {
        case 'outer':
            outer.style.backgroundColor = randomColor();
            inner.style.backgroundColor = prevInnerBackgroundColor;
            break;
        case 'inner':
            outer.style.backgroundColor = randomColor();
            inner.style.backgroundColor = randomColor();
            break;
        case 'btn' :
            inner.style.backgroundColor = randomColor();
            outer.style.backgroundColor = randomColor();
            btn.style.backgroundColor = randomColor();
            break;
    }
});