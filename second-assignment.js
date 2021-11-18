
let area = (type, length, width ) => {
  
   if(type===`s`){
       return length*length;

   }else if(type===`r`){

    return length*width;

   }else if(type===`t`){

       return .5*width*length;

   }
}

 let square= area(`s`, 40);
 let rectangle= area(`r`, 50, 40);
 let tringle= area(`t`, 20, 10 )
 
 console.log(square);
 console.log(rectangle);
 console.log(tringle);




    