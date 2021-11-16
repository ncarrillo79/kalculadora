//const http =require('http')
const sum =require('./src/sum.js')
const substract = require('./src/substract.js')
const multiply = require('./src/multiply.js')
const  div  = require('./src/div.js')


// const server = http.createServer((req,res)=> {
//     console.log(http.createServer())
//     res.end('resposta guau')
// })

// const port=3000

// server.listen(port,()=>{
//     'te oigo'
// })

 var a = 15
 var b= 5
 

console.log(sum.soma(a,b))
console.log(substract.subs(a,b))
console.log(multiply.multiply(a,b))
console.log(div.divide(a,b))
