let student = {}
student.no = 1
student.name = '홍길동'
student.kor = 90
student.eng = 80

student.total = function() {
  console.log(this); //여기서 this는 student객체가 나온다.
  return this.kor + this.eng
}

//lambda와 익명함수는 this를 해석하는 방식이 다르다.
//따라서 람다식을 썼을 때 예상했던 값이 나오지 않게 된다.
// student.avg = () => this.total / 2
student.avg = () => function() {return this.total() / 2} //여기 this는 {} 나온다.

console.log(student.total());
console.log(student.avg());

let str = "abcd"
str.length= 20
console.log(str.length)

str  = "abcdeabcdeabcde"
console.log(str.indexOf("cd", 6));

/*
  이상 미만
  slice == substring(시작위치, 종료위치)
  substr (시작위치, 개수)
*/
console.log(str.slice(-3))
//cde -> -3부터 끝까지
console.log(str.slice(-3, -1));

console.log(str);
console.log(str.replace("ab", "fg"));
console.log(str.replace(/Ab/gi, "fg"));

let id = "javaman"
let id2 = "batman"


function maskId(str){
  return  str.slice(0 , 3).padEnd(str.length, "*")
}

console.log(maskId(id));
console.log(maskId(id2));

console.log("abcd"[2])
console.log("abcd".charAt(2))

str = ""
for(let i = 0; i < 26; i++){
  str += String.fromCharCode(65 + i)
}
console.log(str);

let str2 = "abcd" //typeof(str2) == string
let str3 = new String("abcd") //typeof(str3) == object

console.log(str2 == str3);
console.log(str2 === str3);

let num = 1234;
num = String(num) //num이 문자열 타입이 됨
num = num.toString() //num이 문자열 타입이 됨

num = 1.234567e3;
console.log(num);


let arr = [1, 2, 3, 'a', 'b']
let result = arr.join("-")
console.log(result);