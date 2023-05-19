let single = "He is called 'John' ";
let double = 'He is called "John" ';

let double2 = "He is called \n \"John\" ";

console.log(single);
console.log(double);
console.log(double2);

console.log(single.length);

let mixedStr = 'abcd가나다';
console.log(mixedStr.length);
console.log(mixedStr.substring(4));
//substring(4, 5) 4이상 5 미만
console.log(mixedStr.substring(4, 5));
console.log(mixedStr[4]);


let x1 = 34;
let x2 = 34.12;

console.log(typeof mixedStr)
console.log(typeof x1)

x2 = '1234'

console.log(typeof mixedStr)
console.log(typeof x1)

console.log(Number.MAX_VALUE)


let val = undefined;
let n = null;
console.log(typeof val);
console.log(typeof n);

// console.log(aaa)

//왜 안나오지...?
// console.log(x2.toFixed(1));


let obj = {a:10, b:'abcd', c:{a:10, b:20}};
obj.a = 20;

obj.d = 50;
obj["s#arp"] = 60;

delete obj.a; //a를 지워라
console.log(obj); //b, c, d
//아래 두개는 같음
console.log(obj["b"], obj.b);
console.log(obj.c.b);

let arr = [10, 30, 50, "a", true, {}, [1, 2, 3]]; //배열 리터럴로 선언
console.log(arr)
console.log(arr.length)
console.log(arr[3])
arr[3] = 100
console.log(arr[3])

//java에서 했던 학생 예제
let students = [
  {no:1, name:"홍길동", kor:90},
   {no:2, name:"김길동", kor:80}
];

console.log(students[1].name)

console.log(3.14.toString(2))
console.log((1026).toString(2))