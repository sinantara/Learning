// ez egy egysoros komment

/* ez
egy
tobb Soros
komment
*/

const db_user = 'kisari'
const db_pass = 'my greatest secret'

var a = 2
var b = true

let d = 42

const c = 4

console.log(c + 2 * 4 - 1)

console.log("Hello World!")

console.log(a)

console.log('Hello World!')

a = 3

console.log(a)

console.log('Hello World!')

a = a + 1

console.log(a)

a += 3

console.log(a)

a++

console.log(a)

a--

console.log(a)

a -= 2

console.log(a)

a = 2 * 3

console.log(a)

a = 6 / 2

console.log(a)

// a = a * 2
a *= 2

console.log(a)

// a = a / 2
a /= 2

console.log(a)

// scope-ok, let - var kulonbseg
~function () {
    var _a = 1
    let _b = 1

    if (_a == _b) {
        var _c = 1
        let _d = 1

        console.log(_a, _b, _c, _d)
    }

    if (_a == _b) {
        let _d = 2
        console.log(_d)
    }

    // hibat okozna, mert _d mar nem letezik ebben a scope-ban
    // console.log(_a, _b, _c, _d)
}()
