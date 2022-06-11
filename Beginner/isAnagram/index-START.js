/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/



// function isAnagram(stringA, stringB) {
//     ra = stringA.toLowerCase().split('')
//     rb = stringB.toLowerCase().split('')
//     console.log(ra.sort(), rb.sort())
//     ra.sort().join('') == rb.sort().join('') ? true : false
// }

function isAnagram(stringA, stringB) {
    // Code goes here
    arrA = stringA.toLowerCase().split('').sort()
    arrB = stringB.toLowerCase().split('').sort()

    console.log(arrA, arrB)

   if (arrA.join() === arrB.join()){
        return true
    }else{
        return false
    }
    

}
// function isAnagram(stringA, stringB) {
//     // Code goes here
//     arrA = stringA.toLowerCase().split('').sort()
//     arrB = stringB.toLowerCase().split('').sort()

//     console.log(arrA, arrB)

//     for (let i = 0; i < arrA.length; i++){
//         if (arrA[i] === arrB[i]){
//             return true
//         }else {
//             return false
//         }
//     }
    

// }

module.exports = isAnagram