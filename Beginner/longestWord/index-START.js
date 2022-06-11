/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    let newText = text.split(' ')
    let arr = []
    for(let i = 0; i < newText.length ; i++) {
        let num = newText[i].length
        arr.push(num)
    }
    let long = Math.max(...arr)
    return newText[arr.indexOf(long)]
    
}

// p - text string
//returns longest word
// 'hi bye sigh' - return 'sigh'
// p - 
module.exports = longestWord