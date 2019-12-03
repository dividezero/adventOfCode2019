const fs = require('fs')
const { processInput } = require('./index')

const readInput = () =>
  new Promise((resolve, reject) =>
    fs.readFile('./input.txt', 'utf8', (err, data) => {
      if (err) reject(err)
      resolve(
        data
          .split(',')
          .map(entry => parseInt(entry))
          .filter(num => !isNaN(num))
      )
    })
  )

const run = async (noun, verb) => {
  const input = await readInput()
  input[1] = noun
  input[2] = verb
  return processInput(input)
}

const bruteForce = async (min, max, target) => {
  let verb, noun
  for (let x = min; x <= max; x++) {
    for (let y = min; y <= max; y++) {
      const [result] = await run(x, y)
      // console.log(`x:${x} y:${y} result:${result}`)
      if (target === result) {
        verb = x
        noun = y
        break
      }
    }
    if (verb && noun) break
  }
  return [verb, noun]
}

run(12, 2)
  .then(result => console.log(result[0]))
  .catch(console.error)

bruteForce(0, 99, 19690720)
  .then(([noun, verb]) => console.log(100 * noun + verb))
  .catch(console.error)
