var num
console.log(num);
var num = 10;
console.log(num);

f1();
// f2();

function f1() {
  console.log("f1");
}

// let f2 = function () {
//   console.log("f2");
// }

//함수 데이터타입
console.log(typeof f1);
console.log(typeof f2);

let f3 = f1
f3()

//parameter를 통해 함수의 호출을 위임할 수 있다.
//이때 이 함수를 callback 이라고 한다.
let f4 = function(p1, p2) {
  p1()
  p2()
}



f4(f1, f1) //호출이 가능한 것은 함수 형태만!

f4 (f1, function() {console.log(1234)})


let f5 = function(a, b){
  return a + b
}

//lambda식. 함수라고 안하고 "식" 이라고 한다.
let f6 = (a, b) => {return a + b}
let f7 = (a, b) => a + b
//f6과 f7은 정확히 똑같은 식이다. 


console.log(f5(10, 20));
console.log(f6(10, 20));
console.log(f6(10, 20));

var c = 20;
console.log();
function f8(a, b){
    c = 10
    // console.log(window.c)
}
f8()
console.log(c)


function makeFunc() {
	var name = "Mozilla"
	function displayName() {
		alert(name)
	}
	return displayName
}

