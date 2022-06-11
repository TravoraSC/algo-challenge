// Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length. E.g
// chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
// should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]

function chunkArray(array, size) {
    let newArray = []
    // let newSize = size
    //let w i = 0?
    for(let i = 0; i < array.length ; i+=size) {
        // i + size
        // console.log(array.length)
        // newSize += size
        newArray.push(array.slice(i, i+size))
    }
    console.log(newArray)
    return newArray
}



//our og attempt
// function chunkArray(array, size) {
//     let newArray = []
//     let newSize = size
//     for(i = 0; i < array.length ; i+size) {
//         // i + size
//         // console.log(array.length)
//         newSize += size
//         newArray.push(array.slice(i, newSize))
//     }
//     console.log(newArray)
//     return newArray
// }


chunkArray([1, 2, 3, 4, 5, 6, 7], 3)

/*
p- array, chunk number
r- the array split into subarrays using specified length
e- ([1, 2, 3, 4, 5, 6, 7, 8] 3) ---> [[1, 2, 3], [4, 5, 6], [7,8]]
p- using for loop and iterating over array with chunk number, divide into subarrays - put remainder(if any) into subarray

*/
module.exports = chunkArray