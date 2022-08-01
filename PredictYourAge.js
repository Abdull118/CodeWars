// DESCRIPTION:
// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// // Divide by two.

//Solution:

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    // your code
    let product = []
    let sum = 0
    let newArr = [age1,age2,age3,age4,age5,age6,age7,age8]
    for(i=0; i<newArr.length; i++){
        if(newArr[i] === newArr[i]){
          product.push(newArr[i] * newArr[i])
      }
    }
    for(k=0; k<product.length; k++){
      sum = sum + product[k]
    }
    return Math.floor(Math.sqrt(sum) / 2)
  }