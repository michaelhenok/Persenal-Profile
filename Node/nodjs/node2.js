/**1. Array – Find array of Odd/Even/Numbers divisible by 4
2. Caluculate Sum of all Odd/Even/Numbers divisible by 4
3. Find Unique Numbers in the Array
4. Transform Array to print the type of elements in the Array
getTypes([50,”apple”,{a:1}]) => [“number”,”string”,”object”]
5. Destructure Array
From the given array, build an object that has array elements as
properties. The name of the property is
<typeof the element>+index
destructureArray([50,”apple”,{a:1}])=>
{number0:50,string1:”apple”,object2:{a:1}}
6. Find Index of first odd number - (using array method and also not
using array methods)
7. Convert string to array and array to string. don’t use split() and
toString()
 */

//Array – Find array of Odd/Even/Numbers divisible by 4
function arrayOfOdds(arr){
    let arr2=[]
    for(let ele of arr){
        if(ele%2!==0){
            arr2.push(ele)
        }
    }
return arr2
}
function arrayOfEvens(arr){
    let arr2=[]
    for(let ele of arr){
        if(ele%2===0){
            arr2.push(ele)
        }
    }
    return arr2
}

function divisibleByfour(arr){
    let arr2=[]
    for(let ele of arr){
        if(ele%4===0){
            arr2.push(ele)
        }
    }
    return arr2
}


//2. Caluculate Sum of all Odd/Even/Numbers divisible by 4
function sumOfallOdd(a){
    let arr=arrayOfOdds(a);
let sum=0
    for(let ele of arr){
      
        sum=sum+ele

    }
return sum
}
function sumOfallEven(a){
    let arr=arrayOfEvens(a);
let sum=0
    for(let ele of arr){
      
        sum=sum+ele

    }
return sum
}

function sumOfalldiv(a){
    let arr=divisibleByfour(a);
let sum=0
    for(let ele of arr){
      
        sum=sum+ele

    }
return sum
}

//3. Find Unique Numbers in the Array
function uniqueNumbers(arr){
    let count=0
    let arr2=[]
for(let ele of arr){
    count=0
    for(let i=0 ;i<arr.length;i++){
        if(ele===arr[i]){
            count++;
        }
    }
    if(count==1){
       arr2.push(ele)
    }
}
return arr2
}
console.log(uniqueNumbers([1,1,2,2,2,2,3,4,5]))

//4 4. Transform Array to print the type of elements in the Array

function types(a){
for(let ele of a){
    console.log(typeof ele)
}

}
types([1,"abi"])

//5  Destructure Array
// From the given array, build an object that has array elements as
// properties. The name of the property is
// <typeof the element>+index
// destructureArray([50,”apple”,{a:1}])=>
// {number0:50,string1:”apple”,object2:{a:1}}

function destructure(arr){
let obj={}
let count=0
for(let ele of arr){
    
    let type=typeof ele + count
  obj[type]=ele
  count++
}
return obj
}
console.log(destructure([1,"ab",{a:1}]))

//6 Find Index of first odd number - (using array method and also not
// using array methods)
function indexofodd(arr){
    // arr.findIndex(a=>a%2!==0);
    let count=0;
    for(let ele of arr){
        
        if(ele%2!==0){
            return count;
        }
        count++;
    }

}

//7 7. Convert string to array and array to string. don’t use split() and toString()

console.log("abie ass".split( " "))

function convertArrtoString(arr){
    let word=""
    for(let ele of arr){
        word=word+ele
    }
    return word
}
console.log(convertArrtoString(["abi",2,3]))




// function convertStrt
module.exports ={arrayOfEvens,convertArrtoString,indexofodd,divisibleByfour,
    sumOfallEven,sumOfallOdd,arrayOfOdds,destructure,uniqueNumbers,sumOfalldiv

};
