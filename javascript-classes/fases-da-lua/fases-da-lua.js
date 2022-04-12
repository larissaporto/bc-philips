let inicio = [0, 2, 99, 97, 30]
let final = [2, 3, 97, 94, 35]

for (var i = inicio.length - 1; i >= 0; i--) {
    if (inicio[i] >= 0 && final[i] <= 2) {
       console.log('nova');
    } else if (final[i] > inicio[i] && final[i] <= 96) {
        console.log('crescente');
    } else if ( inicio[i] <= 96 && final[i] >= 3 && inicio[i] > final[i]  ) {
        console.log('minguante');                 //complete o código nos espaços em branco
    } else { 
        console.log('cheia');
    }

}


