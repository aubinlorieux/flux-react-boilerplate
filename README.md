# React Flux Webpack Boilerplate

To install dependencies

```
$ npm install
```

To build the final dist

```
$ npm run build
```

To use coffee update package.json

```
"config": {
  "language": "coffee"
}
```

default: es6

ES6 is use anyway if you choose to use coffee, so you can mix both

**Example:**

CoffeScript file
```coffee
class Person
  constructor: (@name) ->

  talk: ->
    console.log "My name is #{@name}"

module.exports = Person
```

Javascript file
```js

import Person from './my-coffee-file.coffee'

p = new Person("George HABITBOL")
p.talk()
// console.log => George HABITBOL

```

## Source

The dev sources are available in the `src` directory. The main file is app.js

The less sources are available in the `src`directory. The main file is app.less

If you want to use bootstrap installed via npm:

```less
@import ~/bootstrap/less/bootstrap
```

