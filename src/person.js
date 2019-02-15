class Person {
  constructor (aName) {
    this._name = aName
    this._age = 0
  }
  get name () { return this._name }
  get age () { return this._age }

  setAge (age) {
    if (age < 0) throw new Error('Cannot assign negative age')
    else this._age = age
  }

  greet () {
    console.log(`My name is ${this.nombre} and my age is ${this.edad}`)
  }
}

const _Person = Person
export { _Person as Person }
