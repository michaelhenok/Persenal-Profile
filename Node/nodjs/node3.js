/**1. Convert Object to Array
Each element in the array is the concentation of key+value in the
object.
convertObjectToArray({a:1,b:[1,2],c:”string”,d:{x:1,y:2}}
=> [a1,b12,cstring,dx1,dy2]
2. Minify Object
Get objects that has properties of name, ‘a’
[{a:1,b:2},{a:2,b:4]=> [{a:1},{a:2}]
3. Get the Oldest person age
findOldestPerson[{name:’Ram’,age:20},
{name:’Lakshman’,age:15}]=>Ram
4. Get the Youngest person name
findYounger[{name:’Ram’,age:20},{name:’Lakshman’,age:15}]=>15
5. Find the person whose age is between 16 and 17 years.
findYounger[{name:’Ram’,age:20},{name:’Lakshman’,age:15}]=>
{name:’Lakshman’,age:15} */

//1. Convert Object to Array
// Each element in the array is the concentation of key+value in the
// object.
// convertObjectToArray({a:1,b:[1,2],c:”string”,d:{x:1,y:2}}
// => [a1,b12,cstring,dx1,dy2]

function convertFromObjectToArray(objj){
    let arr=[]
    for(let key in objj){


      if(typeof objj[key]==="number"||typeof objj[key]==="string"){

             arr.push(key+objj[key])

      }else if(Array.isArray(objj[key])){
          let obj2=objj[key]
          let word=key
           for( let key2 in obj2 ){
               word=word  + obj2[key2]
           }
           arr.push(word);
          word="";
      }else if(typeof objj[key]==="object"){
       
        let obj3=objj[key]//{x:1,y:2}
        let word=""
             for(let key3 in obj3){
                   word=key+key3+obj3[key3]
                   arr.push(word)
                  
             }
      }  
      


    }
    return arr;
}
console.log(convertFromObjectToArray({a:1,b:[1,2],c:"string",d:{x:1,y:2}}))

//2. Minify Object
// Get objects that has properties of name, ‘a’
// [{a:1,b:2},{a:2,b:4}]=> [{a:1},{a:2}]
function minify(arr){
    for(let obj of arr){
        for(let key in obj){
            if(key!=="a"){
                delete obj[key]
            }
        }
    }
    return arr
}

console.log(minify([{a:1,b:2},{a:2,b:4}]))

//3. Get the Oldest person age
// findOldestPerson[{name:’Ram’,age:20},
//     {name:’Lakshman’,age:15}]=>Ram

function oldest(arr){
let name=""
let maxage=0
let keyName=""
for(let obj of arr){
    for(let key in obj){
        if(key==="name"){
            keyName=key
        }
        if(key==="age"){
            if(obj[key]>maxage){
                maxage=obj[key]
                name=obj[keyName]
            }
        }
    }
}
return name
}
console.log(oldest([{name:"Ram",age:20},
       {name:"Lakshman",age:15}]))

       //4. Get the Youngest person name
// findYounger[{name:’Ram’,age:20},{name:’Lakshman’,age:15}]=>15

function youngest(arr){
    let name=""
    let minage=1000
    let keyName=""
    for(let obj of arr){
        for(let key in obj){
            if(key==="name"){
                keyName=key
            }
            if(key==="age"){
                if(obj[key]<minage){
                    minage=obj[key]
                    name=obj[keyName]
                }
            }
        }
    }
    return minage
    }
    console.log(youngest([{name:"Ram",age:20},
       {name:"Lakshman",age:15}]))

//        5. Find the person whose age is between 16 and 17 years.
// findYounger[{name:’Ram’,age:20},{name:’Lakshman’,age:15}]=>
// {name:’Lakshman’,age:15}
function younger(arr){
    let objj;
    for(let obj of arr){
        for(let key in obj){
            if(key==="age"){
                if(obj[key]===16||obj[key]===17){
                   objj=obj
                }
            }
        }
    }
    return objj
    }
    console.log(younger([{name:"Ram",age:20},
       {name:"Lakshman",age:16}]))

module.exports={younger,youngest,oldest,minify,convertFromObjectToArray}