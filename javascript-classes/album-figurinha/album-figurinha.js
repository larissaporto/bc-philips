// gets() função interna do programa para fazer parce tem que substituir

// const numTotal = parseInt(gets())
// const numFigCompradas = parseInt(gets())
const numTotal = 20
const numFigCompradas = 10

let fig = [3, 4, 3, 5, 10, 10, 5, 1, 6, 9] 
const setFig = new Set()

for(let i = 0; i < numFigCompradas; i++ ){
  // const fig = parseInt(gets());
  setFig.add( fig[i] )
}

console.log(numTotal - setFig.size)