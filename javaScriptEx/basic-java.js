// //Define a function max() that takes two numbers as 
// //arguments and returns the largest of them. Use the if-then-else construct
// // available in Javascript

// const max=(a,b)=>{
//     if(a>b){
//         return a
//     }else if(b>a){
//         return b
//     }else{
//         return"they are equal"
//     }
// }
// console.log(max(20,10));

// //question 2
// //Define a function maxOfThree() that takes three numbers as
// // arguments and returns the largest of them.

// const maxOfThree=(a,b,c)=> {
// if(a>b&&a>c){
//     return a
// }else if(b>c){
//     return b
// }else{
//     return c
// }
// }

// //question 3
// //Write a function isVowel() that takes a character
// // (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

// function isVowel(word){
// if((word.length===1)&&(word==='a'||word==='e'||word==='i'||word==='o'||word==='u')){
//     return true
// }
// else{
//     return false
// }
// }

// //question 4
// /**Define a function sum() and a function multiply() 
//  * that sums and multiplies (respectively) all the numbers in 
//  * an array of numbers. For example, sum([1,2,3,4]) should return 10,
//  *  and multiply([1,2,3,4]) should return 24. */
// let sum=(arr)=>{
//     // let sums=0
//     return arr.reduce((c,d)=>c+d,100)
// }

// console.log(sum([1,2,3,4]))
// //multiply

// let multiply=(arr)=>{
//     return arr.reduce((c,d)=>c*d,100)
// }
// console.log(multiply([1,2,3,4]))

// //Define a function reverse() that computes the reversal of a string. 
// //For example, reverse("jag testar") should return the string "ratset gaj".

// function reverses(word){
//     let reversed="";

// for (let index = 0; index<word.length; index++) {
    
//     reversed += word.charAt(word.length-1-index);
    
// }
// //console.log(reversed)
// return reversed
// }

// //reverses('rafity')
// console.log(reverses("xaxe"))

let objArray = [{name:"a",age:70},{name:"b",age:30},{name:"c",age:40}];
 let myTable = createTable(objArray);
 
 document.body.append(myTable);
 


 let array1 = [{name:hen ,age: 20 } , {name:toni ,age: 23 }, 
 {name:bin ,age: 27 }]
 
 
 
 function modifyTable(o)

    function createTable(objArray) {
        let tableElement = document.createElement("table");
        let rows = "";
        let headers = "<tr>";

        //Create headers
        for (let key in objArray[0]) {
            headers += "<th>" + key + "</th>";
        }

        headers += "</tr>";
        console.log(headers)
        for (let element of objArray) {
            rows += "<tr>";
            for (let key in element) {
                rows += "<td>" + element[key] + "</td>";
            }
            rows += "</tr>"
        }
        console.log(rows)
        tableElement.innerHTML = headers + rows;
        return tableElement;
    }

