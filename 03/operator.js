// 대입
// << (shift)

let num = 10;
num <<= 3; //2의 3승의 값을 곱한다.
console.log(num)

num = 3 ** 4;
console.log(num)

num = 10;
let str = "10"

console.log(num == str) //true
console.log(num === str) //일치 연산 false
console.log(num !== str) //true

//Not a Number => NaN
console.log( + "abcd")

console.log(parseInt("1234가나다"));
console.log(+("1234가나다"))
console.log(NaN== NaN)
console.log(3/0 == Infinity)
console.log(isNaN(NaN))
console.log(isFinite(Infinity))

console.log("12" + 3);
console.log("12" * 3);
console.log("12" / 3);
console.log("12" - 3);

console.log(!!"")
console.log(!!0)
console.log(!!NaN)
console.log(!!Infinity)
console.log(!![])
console.log(!!{})
console.log(!!" ")

console.log()

//num이 
if(num){

}

let arr = [];
arr.length = 20;
console.log(arr[30])
arr[30] = 1
console.log(arr)

let sum = 0; //만일 초기화를 안 해준다면 NaN이 출력된다.
// for(let i = 1; i <= 100; i++){
//   sum += i;
// }
//number타입은 0일때 false가 되고 이때까지 반복을 하겠다는 뜻 
for(var i = 101; --i ;){
  sum += i + 1;
}
console.log(sum)
console.log(i)