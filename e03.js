/*
03 Marsos
Create a function called marsos that will take in one string str as input.
A spaceship is sent to Mars but crashes.
It sends a series of “SOS” messages to Earth for help.
Due to cosmic radiation, some of the “SOS” messages were altered during transmission.

The goal of the function is to determine how many letters were altered during transmission.

Exemple: for the input SOFS OSS ISSOW the function will return 3

function Marsos (str) {

    
    const alphabet = ["SOS", "SOS", "SOS"]
    let count = 0
    for (var i = 0; i < alphabet.length; i++) {
        const loweredSentence = str.toLowerCase(i)
    
        if (!loweredSentence.includes(alphabet)) {
         count ++
        }
      }
  
    return count
}
const count= Marsos("SOFSOSSISSOW")
console.log(count)



 CORRECTION*/
function Marsos(str) {
    const sosCount = str.length / 3
    const messages = "SOS".repeat(sosCount)
  
    let errorCount = 0
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== messages[i]) {
        errorCount++
      }
    }
  
    return errorCount
  }
  const count= Marsos("SOFSOSSISSOW")
console.log(count)