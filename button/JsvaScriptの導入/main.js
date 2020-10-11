const btn = document.querySelector('#btn');

// const hello = function() {
//   // alert("hello");
//   btn.style.color = "red"
// }
// const hello2 = function() {
//   alert("hello");
// }

// btn.addEventListener('click', hello)
// btn.addEventListener('mouseenter', hello)

// btn.removeEventListener("mouseenter", hello)

// btn.addEventListener("click", hello2);

// let hello = "hello world";

// // 文末に丸括弧（）が付くものはメソッド
// console.log(hello.toUpperCase());

// // 文末に何も付かないものはプロパティー
// // 定義した変数の特定の値を保持しているもの
// console.log(hello.length);

// const arry = new Array(1,2,3,4,5,6);
const arry = [1,2,3,4,5,6];
// arry[2] = "go"
// arry.push("new item");
arry.unshift("new item");
const val = arry.pop();
const val2 = arry.shift();
console.log(arry);
console.log(val)
console.log(val2)