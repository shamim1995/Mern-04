let name=prompt(`name`);
let weight=prompt(`weight`)
let height = prompt(`height`)



let bmiCal= (kg, feet)=>{
let weight=kg;
let height=feet/3.28
let bmi =weight / (height * height);
return bmi.toFixed(2);



}
console.log( `
weight=${weight}
height= ${height}
------------------
${name} your Bmi = ${bmiCal(weight, height)};
`);