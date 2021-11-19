
let currencyConverter=(currencyName, convert )=>{
let currency = currencyName;
let amount=convert;

if (currency == 'EURO' || currency == '£') {
    let calculation= amount*100;
    return calculation;
}else if( currency== 'CAD'){
    let calculation= amount*67;
    return calculation;
}else if(currency=='POUND'){
    let calculation= amount*116;
    return calculation;
}else if( currency=='USD' || currency== '$'){
    let calculation= amount*82;
    return calculation;
}else{
    return(`your Inforamtion wrong `)
    
}

}
console.log(currencyConverter('EURO',2))
console.log(currencyConverter('CAD', 2))
console.log(currencyConverter('POUND', 2))
console.log(currencyConverter('$', 5))