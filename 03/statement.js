let arr = ['봄', '여름', '가을', '겨울']

// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i])
// }

let obj = {a : 1, b : 2, c : 3}

console.log('a' in obj)
console.log('d' in obj)

console.log(0 in arr)
console.log(4 in arr)

for(let i in arr){
  console.log(arr[i]) //배열의 경우 i값으로 인덱스가 나온다.
}

for(let i in obj){
  console.log(i, obj[i])
}

for(let i of arr){
  console.log(i)
}