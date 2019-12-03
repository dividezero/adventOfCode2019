const fs = require('fs')
const { calculateFuel, calcFuelOfFuel } = require('./index')

const readList = () =>
  new Promise((resolve, reject) =>
    fs.readFile('./input.txt', 'utf8', (err, data) => {
      if (err) reject(err)
      resolve(
        data
          .split('\n')
          .map(entry => parseInt(entry))
          .filter(num => !isNaN(num))
      )
    })
  )

const part1 = async () => {
  const data = await readList()
  const total = data.reduce((acc, current) => {
    const fuel = calculateFuel(current)
    return acc + fuel
  }, 0)
  console.log(`FINAL: ${total}`)
}

const part2 = async () => {
  const data = await readList()
  const total = data.reduce((acc, current) => {
    const fuel = calculateFuel(current)
    return acc + fuel + calcFuelOfFuel(fuel)
  }, 0)
  console.log(`FINAL: ${total}`)
}

part1()
  .then(console.log)
  .catch(console.error)

part2()
  .then(console.log)
  .catch(console.error)
