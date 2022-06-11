/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/


//charAt

function hammingDistance(stringA, stringB) {
    let hamDis = 0
    stringA = Array.from(stringA)
    stringB = Array.from(stringB)

    if (stringA.length !== stringB.length) {
        throw 'Unequal strings'
    }
        for (let i = 0; i < stringB.length; i++){
            stringA[i] === stringB[i] ? null : hamDis++
            // console.log('hi', letter, stringB)
        }

    return hamDis
}
//Nick's simpler solution
// function hammingDistance(stringA, stringB) {
//     // Code goes here
//     let counter = 0
//     for(let i = 0; i <= stringA.length; i++){
//         if(stringA.charAt(i) != stringB.charAt(i) ){
//             counter++
//         }
//     }
//     return counter
// }



// hammingDistance('stringA', 'stringB')
/*
p- stringA, stringB
r- # of different letters
e- 'bleep' 'bloop' - 2
p -
edge case - return err

*/
module.exports = hammingDistance