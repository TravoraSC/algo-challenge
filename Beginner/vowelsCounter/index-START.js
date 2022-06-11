/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    let v = 0
    let k = Array.from(text)

    if (k.forEach(letter => { (letter == ('a')) || (letter == ('e')) || (letter == ('i')) || (letter == ('o')) || (letter == ('u')) })) {
        v = v++
    }
    return v
}

// function vowelsCounter(text) {
//     let v = 0
//     return Array.from(text).forEach(letter => { (letter == ('a')) || (letter == ('e')) || (letter == ('i')) || (letter == ('o')) ||(letter == ('u')) ? v++ : null })
//     console.log(v)
// }



module.exports = vowelsCounter;
