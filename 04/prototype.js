function Student(no, name, kor, eng, mat) {
    //Student 객체로 만들어지는 property = this 객체
    this.no = no;
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.mat = mat;
}

Student.prototype.total = function(){
  return this.kor + this.eng + this.mat;
}
Student.prototype.avg = function(){
    return (this.total() / 3).toFixed(2);
}
Student.prototype.value = 10;

Student.getClassNo = function() {
    return 206;
}
Student.value = 20;
// JS prototype : 생성자 함수를 통해 정의된 객체들의 공용 공간

let stud1 = new Student(10, "자바맨", 90, 100, 50)
console.log(stud1.total(), stud1.avg(), stud1.value, Student.getClassNo(), Student.value);

for(var i in stud1){
    console.log(i, stud1[i]);
}

// 날짜 객체에 함수를 추가
Date.prototype.nextDay = function(n) {
    // n = n || 1
    // !n ? 1 : n;
    // if(!n) n = 1;  // n은 n일 이후의 날짜를 확인. 입력 안할 경우 1
    this.setTime(this.getTime() + 1000 * 60 * 60 * 24 * (n || 1) )
    return this;
}
let now = new Date(); //2023-02-23 16:43:XX
now.nextDay(3).nextDay();
// -> 3일 + 1일 해서 총 4일 뒤의 날짜를 출력한다.
//시간은 그리니치 천문대 기준으로 하여 시간 자체는 안 맞을 수 있음

console.log(now)