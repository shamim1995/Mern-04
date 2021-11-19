
// age calculation
let name=prompt(`name`)
let age = prompt('age');
let ageCal=()=>{

     if(age>0 && age<=6){

        console.log(` ${name} you are a baby`);
    }else if(age>6 && age<=12){

        console.log(` ${name}  you are a tenanger man`);
    }else if(age>12 && age<=18){
        console.log(`${name}  you are a young people`);

    }else if(age>18 && age<=30){
        console.log(`${name}  you are a adult person`);

    }else if(age>30 && age<=130){
        console.log(`${name}  you age a old person`);
    }else{
        console.log(`${name}  you don't know your age`);
    }

}
 ageCal();

