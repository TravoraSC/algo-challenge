/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true

p string of text
r - boolean
e - 'kayak', 'poop', - true
    'truck' - false
p 


*/




function palindromeChecker(text) {
    let reverse = text.split('').reverse().join('')
    reverse == text ? true : false
}



module.exports = palindromeChecker; 

//     // Code goes here
//    let arrText = text.split('')


// function palindromeChecker(text) {
//     let arrText = text.split('')

//     console.log(arrText)
//     if (arrText == arrText.reverse()){
//      console.log(arrText.reverse())
//         return true
//     }else{
//         return false
//     }
//  }

 function palindromeChecker(text) {
    // Code goes here
    let reverse = text.split('').reverse().join('')
    
    console.log(text, reverse)
    if (text == reverse) {
        return true
    }else{
       return false 
    } 

}

//    console.log(arrText)
//    if (arrText == arrText.reverse()){
//     console.log(arrText.reverse())
//        return true
//    }else{
//        return false
//    }
// }
