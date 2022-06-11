/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.

    p- n - number
    r - num 1 - n, mult.3 -'fizz'   mult.5'buzz' both- 'fizzbuzz'
    e
    p
*/



function fizzBuzz(n) {
    // Code goes here
    
   for (let i = 1; i <= n; i++){
        if (i % 15 === 0){
            console.log('fizzbuzz')
        }

        else if (i % 3 === 0){
            console.log('fizz')
        }

        else if (i % 5 === 0){
            console.log('buzz')
        }
        else  {
            console.log(i)
        }
   }
    
}

// fizzBuzz(10)


module.exports = fizzBuzz