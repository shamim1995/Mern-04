
// age calculation

let ageCal=(age)=>{

     if(age>0 && age<=6){

        console.log(`you are a baby`);
    }else if(age>6 && age<=12){

        console.log(`you are a tenanger man`);
    }else if(age>12 && age<=18){
        console.log(`you are a young people`);

    }else if(age>18 && age<=30){
        console.log(`you are a adult person`);

    }else if(age>30 && age<=130){
        console.log(`you age a old person`);
    }else{
        console.log(`you don't know your age`);
    }

}
ageCal(5);
ageCal(10);
ageCal(17);
ageCal(22);
ageCal(32);

