/*
[자바스크립트 실습 : 상품관리]

- 기능 : 상품목록, 상품등록, 상품상세, 상품수정, 상품삭제
- 상품정보 : 상품번호, 제조사명, 상품명, 상품수량, 상품가격
- TODO
    1. 상품정보 객체화 (또는 배열)
    2. 기능 함수화
    3. 기능 테스트
*/

function Product(num, company, name, sum, price) {
    this.num = num;
    this.company = company;
    this.name = name;
    this.sum = sum;
    this.price = price;
};

let productArr = [];

function ManageProduct() {
    this.listProduct = function() {
        productArr.forEach(ele => this.showProductInfo(ele));
    },
    this.createProduct = function(num, company, name, sum, price) {
        let prod = new Product(num, company, name, sum, price)
        productArr.push(prod);
    },
    this.showProductInfo = function(ele) {
        console.log(
            '상품번호: '+ele.num
            +', 제조사명: '+ele.company
            +', 상품명: '+ele.name
            +', 상품수량: '+ele.sum
            +', 상품가격: '+ele.price
        );
    },
    this.mofifyProduct = function(num, company, name, sum, price) {
        productArr[productArr.findIndex(ele => ele.num=num)] = {
            num: num,
            company: company,
            name: name,
            sum: sum,
            price: price
        }
    },
    this.deleteProduct = function(num) {
        productArr = productArr.filter(
            product => { return product.num!=num; }
        );
    }
}



const prodm = new ManageProduct();
prodm.createProduct(1,2,3,4,5);
prodm.createProduct(11,12,13,14,15);
prodm.createProduct(21,22,23,24,25);
prodm.listProduct();
console.log('');

prodm.mofifyProduct(1,'집','아들',3,'Free');
prodm.listProduct();
console.log('');

prodm.deleteProduct(11);
prodm.listProduct();
console.log('');


// 맵으로 바꿔서 해보기
const productMap = new Map();

function ManageProductMap() {
    this.listProduct = function() {
        productMap.keys().forEach(
            num => this.showProductInfo(num)
        );
    },
    this.createProduct = function(num, company, name, sum, price) {
        productMap.set(num, {company: company, name: name, sum: sum, price: price})
    },
    this.showProductInfo = function(ele) {
        console.log(
            '상품번호: '+ele
            +', 제조사명: '+productMap.get(ele).company
            +', 상품명: '+productMap.get(ele).name
            +', 상품수량: '+productMap.get(ele).sum
            +', 상품가격: '+productMap.get(ele).price
        );
    },
    this.mofifyProduct = function(num, company, name, sum, price) {
        productMap.set(num, {company: company, name: name, sum: sum, price: price})
    },
    this.deleteProduct = function(num) {
        productMap.delete(num);
    }
}

const prodmm = new ManageProductMap();

prodmm.createProduct(1,2,3,4,5);
prodmm.createProduct(11,12,13,14,15);
prodmm.createProduct(21,22,23,24,25);
prodmm.listProduct();
console.log('');

// modify
prodmm.mofifyProduct(1,'집','아들',3,'Free');
prodmm.listProduct();
console.log('');

// delete
prodmm.deleteProduct(11);
prodmm.listProduct();
console.log('');