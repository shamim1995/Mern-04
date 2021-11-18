
let currencyConverter=(euro, convert, )=>{
let currency=euro;
let amount=convert;

if (currency == 'Euro' || currency == '£') {
    let calculation= amount*109;
    return calculation;
}else if( currency== 'CAD'){
    let calculation= amount*67;
    return calculation;
}else if(currency=='POUND'){
    let calculation= amount*116;
    return calculation;
}else if( currency=='USD' || '$'){
    let calculation= amount*82;
    return calculation;
}else{
    return(`you have no money `)
}

}
console.log(currencyConverter('Euro', 10))
console.log(currencyConverter('CAD', 10))
console.log(currencyConverter('POUND', 2))
console.log(currencyConverter('$', 5))