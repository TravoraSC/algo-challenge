/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/

/* 
p- n - index of fibonacci seq.
r- value of n
e- n = 5, 5th element = 5
p- 
*/


//x+=x looped n times

// function fibonacci(n) {
//     let a = 0
//     while (a < n)
//         n++
//         a += n

// }

// function fibonacci(n) {
//     let array1 = [1]
//     let currentIndex = 0
//     for (let i = 0; i < n; i++) {
//         currentIndex++
//        let k = array1[i]
//         array1.push(array1.reduce(k, k-1, currentIndex))
//     }
//     return array1(n)
// }
// solution 1:
function fibonacci(n) {
    // Code goes here
    n = n + 1
    let arr = [0, 1]
    for (let i = 1; i <= n; i++){
        arr.push(arr[i] + arr[i -1])
    }
    console.log(arr[n])
    return arr[n]
}

module.exports = fibonacci
// solution 2:
// function fibonacci(n) {
//     // Code goes here
//     let previousNum = 0
//     let currentNum = 1
//     let counter = 1
//     while (counter <= n) {
//         let sum = 0
//         sum = previousNum + currentNum
//         previousNum = currentNum;
//         currentNum = sum
//         counter++
//       }
//     return currentNum

// }


// function fibonacci(n) {
//     n = n - 1
//     let array1 = [1, 1]
//     for (let i = 0; i < n; i++) {
//        let k = array1[i]
//        let j = array1[i+1]
//         // array1.reduce(function(k, j) {
//             array1.push(k + j)
//         // })
        
//     }
//     return array1[n]
// }
// console.log(fibonacci(3))
// function fibonacci(n) {
//     let array1 = [1, 1]
//     for (let i = 1; i < n; i++) {
//        let k = array1[i]
//        let j = array1[i+1]
//         array1.push(array1.reduce(function(k, j) {
//             k + j
//         })
//         )}
//         return array1
// }


// [0, 1, 1, 2, 3, 5]6
// 8

// it's like math.floor /ceil - how to choose to round up v down - 0, 1