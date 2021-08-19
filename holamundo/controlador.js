// let myArray=[];
// myArray.push("yorlady");
// myArray.push("juan");
// myArray.push("pablo");

// for (let i= 0; i< myArray.length; i++)
// {
//     console.log(myArray[i]);
// }

// //forma 2 de llamar un array, solo trae los elementos
// for(i of myArray){
//     console.log(i);
// } 



// myArray=[2,4,5];

// myArray.forEach((item)>={
//     console.log(item*item);
// });


//pongo la edad y me devuelve el nombre

// let names=["pedro","camilo", "juan", "pablo"];
// let ages=[25,35,28,51];
// const getName= (age)=>{
//     let index= 0;
//     for(let i=0; i< ages.length; i++){
//         if(ages[i]== age){
//             index=i;
//             break;
//         }
//     }
//     return names[index];
// }
// console.log(getName(35));

myArray=[2,3,6,8];

// let data= myArray.map((item)=>{
//     if(item %2 != 0){
//         return item;
//     }
// });

// console.log(data)


let data= myArray.filter((item)=>{
    if(item %2 != 0){
        return item;
    }
});

console.log(data)
