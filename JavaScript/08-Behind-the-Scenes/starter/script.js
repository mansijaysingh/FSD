'use strict';


// function calcAge(birtheyear){
//   const age =2025-birtheyear
//  function printAge(){
//   const  output=`you are ${age},born in ${birtheyear}`
//   console.log(output);

//   if(birtheyear>=1981 && birtheyear<=1996){
//     const str=`you are a millennial, born in ${birtheyear}`



//   }
//  }
//  printAge();
// return age;
// }
// const firstName='john';
// calcAge(2002);

// console.log(me);
// console.log(job);
// console.log(year)


// var me ="mansi";
// let job="teacher";
// const year=2002;


//functions
// function addDecl(a,b){
//   return a+b;
// }

// console.log(this);

const jonas={
  year:1991,
  calcAge:function(){
    console.log(this);
    console.log(2025-this.year)
  }
}

jonas.calcAge();


const mansi={
  year:2002,
};

mansi.calcAge=jonas.calcAge;
mansi.calcAge();

const f=jonas.calcAge;
// console.log(f)
