/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
    let counter = 0
    let counterArr = []
    let splitText = text.split
    splitText = splitText.sort()
    for(i = 0; i < splitText.length; i++){
        if(splitText[i] === splitText[i+1]){
            counter+=counter++
            counterArr.push(counter, splitText[i])
        }else{
            counter = 0
        }
       let max = Math.max(...counterArr)
       let textIndex = counterArr.findIndex(max)
    }
    return counterArr[textIndex + 1]
}



module.exports = maxRecurringChar;