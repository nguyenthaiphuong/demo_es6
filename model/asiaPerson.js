import Person from "base"
class AsiaPerson extends Person {
    constructor (eyeColor, skinColor, hairColor, position, height, success, fail) {
        super(eyeColor, skinColor, hairColor, position)
        this._success = success
        this._fail = fail
        this._height = height
    }

    let fives = []
    let nums = [1, 2, 3, 4, 5, 6]

    fives = []
    nums = [1, 2, 3, 4, 5, 6]

    set success (success) {
        this._success = success
    }

    get success () {
        return this._success
    }

    set fail (fail) {
        return this._fail
    }

    move () {
        this.nums.forEach(v => {
            if(v%5 === 0)
                this.fives.push(v)
        })
        console.log(this.fives)
    }

    hold () {
        function foo () { return 1 }
        foo() === 1
        {
            function foo () { return 2 }
            foo()  === 2
        }
        foo() === 1
    }

    calculateHeight (this._height) {
        const amount = 0
        if (this._height) {
            const amount = 1
        }
        {
            const amount = 100
            {
                const amount = 1000
            }
        }
        return amount
    }

    toString () {
        return `Success: this._success  ${this.toString()}`
    }
}

let asiaPerson  = new AsiaPerson("black", "yellow", "black", "Asia", "success", "Fails" )
// set param default
let person = function(eyeColor = asiaPerson.eyeColor, skinColor = asiaPerson.skinColor, hairColor = asiaPerson.hairColor) {

 }

var promise = new Promise(function(resolve, reject){
    reject(asiaPerson.fail);
    resolve(asiaPerson.success);
});

promise.then(
    function(success){
        console.log(success);
    },
    function(error){
        console.log(error);
    }
);
