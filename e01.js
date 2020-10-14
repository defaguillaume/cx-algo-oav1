/* 01 HowManyCamelCase
Create a function called howManyCamelCase that will take one string input str.
We are given a sequence of words that are sandwiched together with no space.
With the exception of the first word, in all of the subsequent words, the first letter of each word is capitalized.

The goal of the function is to output the number of words that are in the camelcase string. Let’s use an example:
jeSuisGuillaume

->3

*/ 

function howManyCamelCase (str) {
    let count = +1

    for(var i = 0; i < str.length; i++) { // pour itéré sur chaque charactère
        const code = str.charCodeAt(i)

        if (code >= 65 && code <= 90) {
            count ++
        } 
    }

    return count
}

const count= howManyCamelCase('bonjourJeSuisGuillaume')
console.log(count)



