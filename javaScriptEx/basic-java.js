// .Define a function max() that takes two numbers as arguments and returns the largest of them. 
function max(a , b){

    if(a > b){
        return a;
    }
    else{
        return b;
    }
}
console.log(max(10,20))
console.log("-----------------------------------")

// Define a function maxOfThree() that takes three numbers 
//as arguments and returns the largest of them.

function threeMax ( num1 , num2 , num3){
// num1 = parseFloat(prompt("Enter first number"))
// num2= parseFloat(prompt("Enter first number"))
// num3 = parseFloat(prompt("Enter first number"))
var largest
if(num1>num2 && num1 > num3){
    largest = num1;
}
if(num2>num1 && num2 > num3){
    largest = num2;
}
if(num3>num2 && num3 > num1){
    largest = num3;
}
return largest;

}
console.log("largest number is " + threeMax(20,10,30))
console.log("-----------------------------------")
// Write a function isVowel() that takes a character (i.e. a string of length 1)
// and returns true if it is a vowel, false otherwise.

// .Define a function sum() and a function multiply() that sums and multiplies 

function sum(first , second){
    let Totsum
    let TotMul
    Totsum = first+ second;
    TotMul = first*second;
    return ("total sum = " + Totsum + " total multipy " + TotMul);
}
console.log(sum(3,5))
console.log("-----------------------------------")

//.(respectively) all the numbers in an array of numbers. For example, 
//sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

function SumAndMult(a , b , c , d){
    let Sumtarget = a + b + c + d;
    let Multtarget = a * b * c * d;
    return ( "sum of the numbers is = " + Sumtarget +
     " Multiply of the numbers is " + Multtarget);
}
console.log(SumAndMult( 1 , 2, 3, 4))
console.log("-----------------------------------")


// Define a function reverse() that computes the reversal of a string. 
//For example, reverse("jag testar") should return the string "ratset gaj".


function reverseString(str){
  let newString = "";
  for(let i = str.length - 1; i >= 0 ; i--){
      newString += str[i];    
  }
  return newString;
}
console.log(reverseString("  jag testar"))
console.log("-----------------------------------")
// Write a function findLongestWord() that takes an array of words and returns the
// length of the longest one.
function findLongestWord(str){

    let newSpit = str.split(' ');
    let newlength = 0;
    for (let i = 0 ; i < newSpit.length ; i++){
        if(newSpit[i].length > newlength){
            newlength = newSpit[i].length;
        }
    }
    return newlength;

}
console.log(findLongestWord("The","quick","brown","fox","jumped","over","the","lazy","dog" ));
console.log("-----------------------------------")

// Write a function filterLongWords() that takes an array of words and an 
//integer i and returns the array of words that are longer than i.

