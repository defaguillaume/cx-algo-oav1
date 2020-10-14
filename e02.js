/* 
02 Panagram
Create a function called IsAPangrams that will take one string, str as input.
A pangram is a sentence that contains every letter of the alphabet.
The goal of this function is to determine if the sentence given is a pangram or not.

If it is not a pangram, the function will return false. If it is a pangram, the function will return true. Here is an example:

"The quick brown fox jumps over the lazy dog"

In the example above,the function will return true.

Hello Efrei

In the example above,the function will return true.
*/

function isPangram (Str) {

    
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  
    for (var i = 0; i < alphabet.length; i++) {
      const loweredSentence = Str.toLowerCase(i)
  
      if (!loweredSentence.includes(alphabet[i])) {
       return false
      }
    }
  
    return console.log('Hello Efrei')

}
const count= isPangram("The quick brown fox jumps over the lazy dog")


