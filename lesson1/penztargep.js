
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Mennyi a termek ara? ', price => {
    rl.question('Mennyit fizettel? ', money => {
        var change = money - price

        console.log('A visszajaro: ' + change)

        rl.close()
    })
})
