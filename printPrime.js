let arr = [1,2,3,4,5,6,7,8,9,10,11]

const isPrime = num => {
    if (num < 2 ) return false;
    if (num === 2) return true;
    if (num%2 === 0) return false;
    for (let fact =3; fact<num; fact += 2){
        if (num%fact===0)
        return false;
    }
    return true;
}

let primeArr = arr.filter(isPrime)

console.log(primeArr)
