function fatorial(n) {
    
    let fat = 1
    for (let c = n; c > 1; c--){
    fat *= c //fat recebe ele mesmo vezes "c"
}

return fat
}
console.log(fatorial(5))
