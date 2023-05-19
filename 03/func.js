/**
 * 누가 / 언제
 * 설명 : 두 수를 입력받아 합계를 반환하는 기능
 * @param {number} p1 
 * @param {number} p2 
 * @returns p1 + p2 
 */
function sum(p1, p2){
  let sum = p1 + p2
  return sum
}

let sum1 = sum(21, 24)
let sum2 = sum(7, 16)

console.log(sum1);
console.log(sum2);

let sumF = function(p1, p2){
  return p1 + p2
}

console.log(sum(10, 20));


let sumF2 = new Function("p1", "p2", "return p1 + p2")
console.log(sumF2(30, 35));


// eval 
eval("console.log(12134)")
