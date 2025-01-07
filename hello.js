console.log('hello javascript');
console.log(3*5);
let string = 'sss';
string = 'ssss';
console.log(string);
const testcon = 'testing';
console.log(testcon);
const testcon2 = {
    value1: 'testing1',
    value2: 'testing2'
}
console.log(testcon2);
testcon2.value1 = 'testing1 again';
console.log(testcon2);
console.log(testcon2.value1);
let testlet = {
    value1: 'testing1',
    value2: 'testing2'
}
console.log(testlet);
testlet = {
    value2: 'testing2 again',
    value3: 'testing3'
}
console.log(testlet);
const person = {
    name: 'Lee',
    sayhello: function() {
        console.log('hi, my name is '+this.name);
    }
}
console.log(person);
person.sayhello();

function add(x, y) {
    return x+y;
}
console.dir(add);
// 웹 콘솔에서 실행시 ƒ add(x,y)
// vscode 에서 실행시 [Function: add]
console.log(add(10,20));
