// //property, method 

// function Student(no, name, kor, eng, mat) {
//     //Student 객체로 만들어지는 property = this 객체
//     this.no = no;
//     this.name = name;
//     var k = kor;
//     this.eng = eng;
//     this.mat = mat;

//     this.getKor = function() {
//         return k;
//     }
//     this.setKor = function(kor) {
//         k = kor;
//     }

//     this.total = function(){
//       return getKor() + this.eng + this.mat;
//     }
//     this.avg = function(){
//         return (this.total() / 3).toFixed(2);
//     }
  
//   }

// Student(1, "홍길동", 90, 80, 90)
// let stud1 = new Student(1, "홍길동", 90, 80, 90) //생성자 함수 
// console.log(stud1.total());

// let students = []
// students.push(stud1);
// students.push(new Student(2, "고길동", 70, 40, 50));
// students.push(new Student(3,  "이길동", 70, 90, 88));

// console.log(students);

// console.log(students.kor, students.eng)



let arr = [1, 3, 5 ,7];
// push, unshift
// pop, shift
//splice, sort
let arr2 = arr.slice(1) // [3, 5, 7]
console.log(arr);
console.log(arr2);

arr.push(9);
arr.unshift(11);
console.log(arr);

arr.pop();
arr.shift()
console.log(arr);


// arr.prototype.remove = function(num) {
//     this.splice(0, num)
//     console.log(arr);
// }

// Array.prototype.remove = function(num) {
//     arr.splice(0, num)
//     console.log(num);
//     return arr;
// }

// console.log(arr.remove(2))

Array.prototype.remove = function(n) {
    this.splice(n, 1); //n번째를 1개 없애라
}

arr.remove(2)
console.log(arr);


arr = [
    {name: '김', score: 50},
    {name: '이', score: 70},
    {name: '박', score: 90},
    {name: '최', score: 30},
    {name: '정', score: 1},
    {name: '전', score: 11},
    {name: '양', score: 12},
]

arr.sort(function(l, r) {return r.score - l.score});
arr.reverse();
console.log(arr);


arr = [1, 13, 10, 5, 6, 4];
arr.sort(function(a, b) {return a - b});
console.log(arr);

let set = new Set()
set.add(3);
set.add(1);
set.add(2);
set.add(6);
set.forEach(function(a) {console.log(a);})
// console.log(set)


let obj = {a: 1, b: 2}
let m = new Map();
m.set("a", 1)
m.set("b", 2)

console.log(m);
console.log(m.get("a"));
console.log(m.a) //출력 안됨

let s = m.entries();
console.log(s);

function max(){
    // console.log(arguments);
    let ret = arguments[0];
    for(let i in arguments){
        if(ret < arguments[i]){
            ret =  arguments[i];
        }
    }
    return ret;
}

console.log(max(10, 20, 30, 40, 0, -10));