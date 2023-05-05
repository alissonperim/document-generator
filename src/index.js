import { document } from './documents/index.js'
let count = 0
do {
    console.log(document.cpf(true))
    count++
} while(count < 15)
