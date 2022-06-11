/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/


// function falsyBouncer(array) {
//   return array.filter((e) =>{
//     return e == true})
//     console.log(arr)
    
//   }
  
  function falsyBouncer(array) {
    return array.filter((value) =>{
      return Boolean(value)     })
    }
    
    
    // function falsyBouncer(array) {
    //     // Code goes here
    // }
    
    // function falsyBouncer(array) {
    //     // Code goes here
    //     let arr = array.filter(e => e == true)
    //     console.log(arr)
    //     return arr
        
    // }
module.exports = falsyBouncer