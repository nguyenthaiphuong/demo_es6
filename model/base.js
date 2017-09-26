class Person {
  constructor (eyeColor, skinColor, hairColor, position) {
      this._eyeColor = eyeColor
      this._skinColor = skinColor
      this._hairColor = hairColor
      this._position = position
  }

  set eyeColor (eyeColor) {
      this._eyeColor = eyeColor
  }

  get eyeColor () {
      return this._eyeColor
  }

  set skinColor (skinColor) {
      this._skinColor = skinColor
  }

  get skinColor () {
      return this._skinColor
  }

  set position (position) {
      this._position = position
  }

  get position () {
      return this._position = position
  }

  toString () {
      return `Person include eye: ${this._eyeColor} skin: ${this._skinColor} hair: ${this._hairColor} position: ${this._position} `
  }
}
