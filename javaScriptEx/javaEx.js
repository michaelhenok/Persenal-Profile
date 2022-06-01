// //Create Array empty/some elements
//  let newArray = [];
//  let arr = [{a:10} , "name" ,10];
//  console.log(arr.length)
//  console.log("*1------------------------------")
// //Update Array - change the value of element at nth position,
// let holder = ["appel" , "lemon" , "furit"];
//    holder[2] = "mango";
//    console.log(holder); 

//   let arr2 = arr;
//   arr2[1]="henok";
//   console.log(arr2[1]) 
//   console.log("*2------------------------------")



// let myArray = ["1" , " 2 " , " 3 "];
// console.log(myArray.splice(2,1,9));

// function isEven(str){
//     return str % 2==0;
// }
// arr = [13, 8, 15, 31, 44];
// function fin(){
//     console.log(arr.filter(isEven));
// }
// fin();

// elemnet = [1,2,3,3,5,3,6,7];

    
//     for(let i = 0 ; i < elemnet.length; i++){
//         if(elemnet[i] == 3){
//          elemnet.splice(i , 1);

//         }
//     }

// console.log(elemnet);

// let myArray= [
//     {
//       name: 'Jack',
//       age: 25,
//     },
//     {
//       name: 'Maria',
//       age: 22,
//     }];

 

//     let index = myArray.findIndex(ellemnts => {
//         if( ellemnts.name ==="Maria"){
//             return true
//         }
//   });


//   console.log(index);

// let number = [9,3,5,1,6,];
// function sortN(a , b){
//     return a - b;
// }
// let ans = number.sort(sortN)
// console.log(ans);



let array1 = [{a:1}, {b:2}, {c:3} ,{d:4}]

   let array2 = [];

    for (let element  in array1){
        
        array2.push(array1[element]);
    }

console.log(array2[0])
console.log(array2[1])
console.log(array2[2])
console.log(array2[3])

