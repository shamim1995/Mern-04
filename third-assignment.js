

let resultPublish=(bangla, banglaSecond, english, englishSecond, math, socialScience, agreculture, religion)=>{
    
 let totalMarks = bangla + banglaSecond + english + englishSecond + math + socialScience + agreculture + religion;
 let subject = 8;
 let gorNumber = totalMarks / subject;

    if(bangla<=32 || banglaSecond <=32 || english <=32 || englishSecond <=32 || math <=32 || socialScience<=32 || agreculture <=32 || religion<=32){
        
        return( `Your average number= ${gorNumber}, You got Failled`)

    }else if(subject<=7){

        return (`You are missed the exam`)
    }
    else if(gorNumber>33 && gorNumber<=40){
         return (`You passed the Examination. Your average number= ${gorNumber} You Get D`);
    
        }else if(gorNumber>40 && gorNumber<=50){
        return (`You passed the Examination. Your average number= ${gorNumber} You Get C`);
    
    }else if(gorNumber>50 && gorNumber<=60){
        return (`You passed the Examination. Your average number= ${gorNumber} You Get B`)

    }else if(gorNumber>60 && gorNumber<=70){
        return (`You passed the Examination. Your average number= ${gorNumber} You Get A-`)

    }else if(gorNumber>70 && gorNumber<=79){
        return (`You passed the Examination. Your average number= ${gorNumber} You Get A`)

    }else if( gorNumber>79 && gorNumber<=89){
        return (`You passed the Examination. Your average number= ${gorNumber} You Get A+`)
    }else if(gorNumber>89 && gorNumber<=100){
        return (`You passed the Examination. Your average number= ${gorNumber} You Get Golden A+`)

    }else {
        return (`You are not attend in the examination`)
    }
      
}

let kalam= resultPublish(33, 35, 37, 38, 39, 41, 43, 58)
let roton=resultPublish(32, 67, 85, 90, 85, 85, 42,89)
let riaz=resultPublish(32, 85, 21, 90, 85, 85, 42,89)

console.log(`kalam er result= ${kalam}`);
console.log(`roton er result= ${roton}`);
console.log(`riaz er result= ${riaz}`);


