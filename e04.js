/*4.1 Count
Create a function that take an array as an input and calculate the 
number of occurrences of a given element in an array.
*/
function count(array, element) {
    let n = 0
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
        n++
      }
    }
  
    return n
  }
/*4.2 Average
Create a function that calculate the average of the elements of an array.
*/
console.log(
    average([1, 2, 3, 4])
  )
  
  function min(array) {
    let smallest = Infinity
  
    for (let i = 0; i < array.length; i++) {
      if (smallest > array[i]) {
        smallest = array[i]
      }
    }
  
    return smallest
  }
/* 4.3 Min
Create a function that calculate the minimum of the elements of an array.
*/
console.log(
    min([58, 0, 45, 34]),
  )
  
  function max(array) {
    let highest = -Infinity
  
    for (let i = 0; i < array.length; i++) {
      if (highest < array[i]) {
        highest = array[i]
      }
    }
  
    return highest
  }
/* 
4.4 Max
Create a function that calculate the maximum of the elements of an array
*/
console.log(
    max([58, 0, 45, 34]),
  )
  
  function shift(array) {
    let newArray = []
  
    for (let i = 1; i < array.length; i++) {
      newArray.push(array[i])
    }
  
    return newArray
  }


/* 
4.5 Max
Create a function that calculate the maximum of the elements of an array.
*/
console.log(
    max([58, 0, 45, 34]),
  )
  
  function shift(array) {
    let newArray = []
  
    for (let i = 1; i < array.length; i++) {
      newArray.push(array[i])
    }
  
    return newArray
  }

/* 
4.6 Shift
Create a function that shift the elements of an array.
*/
console.log(
    shift([1, 2, 3, 4]),
  )
  
  function diff(array) {
    const highest = max(array)
    const smallest = min(array)
  
    return Math.abs(highest - smallest)
  }
/*
4.7 Diff
Create a function that calculates the largest deviation in an array
(the deviation is the absolute value of the difference of two elements)
*/
console.log(
    diff([1, 9, 7, 45, 23]),
  )