var array1 = [1, 2, 3, 4, 5];
var array2 = ['a', 'b', 'c'];

var bigArray = array1.concat(array2);

console.log(bigArray)








var num1 = 2;
var num2 = 3;

var sum = num1 + num2;



var word = "hello";
var letter = "a";

word = word + letter;
//   = "hello" + "a"
// word = "helloa"


word = word + letter;
//   = "helloa" + "a"
// word = " helloaa"

word += letter;




for(i = 0; i < 5; i++) {
    word += letter;
    console.log(word)
}

// 1st part -> iterator initialization
//          -> what number will the count start

// 2nd part  -> condtional statement
//           -> this must be true, before executing  {code}
//           -> if this becomes false, the loop ends

// 3rd part  -> iterator modifier





// 1st loop
// i = 0
// i < 3 ???
// 0 < 3 ---> true
// console.log('Hello')
// i++ ---> i = 0 + 1 ----> i = 1

// 2nd loop
// i = 1
// 1 < 3
// print
// i ++ --> i =2

// 3rd loop
// i = 2
// print
// i++ ---> i = 3

// 4th loop
// i = 3
// i < 3 ???
// 3 < 3 ----> false
