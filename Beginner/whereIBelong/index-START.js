/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/


//this passed 3
// function whereIBelong(arr, num) {
//    for(i = 0; i < arr.length; i++) {
//       if(arr === []){
//          return i     
//       }else if((num <= arr[i] && arr.length > 0)){
//          return i
//       }
//    }
// }
function whereIBelong(arr, num) {
   // Code goes here
   let index = 0
   for ( let i = 0; i < arr.length; i++){
      if (num > arr[i]){
         index++
      }
   }
   return index
}


/*
p - arr. of num, num to be inserted
r - index of num when inserted into appropriate place in arr
e. [1, 8, 9, 15] - num - 6 ---> newArr. - [1, 6, 8, 9, 15] ---> return newArr[1]
*/


module.exports = whereIBelong