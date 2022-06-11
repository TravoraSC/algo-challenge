/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/


function mergeArrays(...arrays) {
    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });
    
    return [...new Set([...jointArray])]

    // let firstArr = arrays[0]
    // let otherArr = arrays[1]
    // let arrNoRepeat = arrays[0]


    // for (i = 0; i < firstArr.length; i++) {
    //     for (k = 0; k = otherArr.length; k++)
    //         firstArr[i].map(el => {
    //             el.includes(otherArr[k]) ? console.log('nothing') : arrNoRepeat.push[otherArr[k]]
    //         })
    // }
    // return arrNoRepeat



}


//P - At least 2 arrays
//R - One array: Combo of Array arguments w/o repeating any elements
//E - let first = ['a', 'b', 'c']
//    let second = ['b', 'c', 'd']

//    newArr = ['a', 'b', 'c', 'd']

//P 




module.exports = mergeArrays