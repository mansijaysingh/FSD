'use strict';


function calcAge(birtheyear){
  const age =2025-birtheyear
 function printAge(){
  const  output=`you are ${age},born in ${birtheyear}`
  console.log(output);

  if(birtheyear>=1981 && birtheyear<=1996){
    const str=`you are a millennial, born in ${birtheyear}`
  }
 }
 printAge();
return age;
}
const firstName='john';
calcAge(2002);