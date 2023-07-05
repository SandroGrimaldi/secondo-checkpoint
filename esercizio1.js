function sumNumber(array){
    let pari= array.filter((el)=> el % 2 === 0);
    let riduzione= pari.reduce((el1,el2) => el1+el2);
    return riduzione
}

console.log(sumNumber([1,2,3,4,5,6]))