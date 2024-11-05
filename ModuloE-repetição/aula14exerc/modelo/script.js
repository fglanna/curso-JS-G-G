/*function parimp(n) {
    if(n%2 == 0 ) {
        return 'par';
    }else {
        return 'ímpar';
    }
   
} 
let res = parimp(21507)

console.log(res)

function soma(n1=0, n2=0 ) {
    return n1 + n2;
}
console.log(soma(15))

function fatorial(n) {
    let fat = 1;
    for (let i = n; i > 1; i--) {
        fat *= i;
    }
    return fat;
    
}
console.log(fatorial(5))*/

 // RECURSIVIDADE
function fatorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }

}
console.log(fatorial(5))