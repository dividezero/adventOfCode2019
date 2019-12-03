const fs = require('fs')

const fileName = './input.txt'

const readList = file =>
  new Promise((resolve, reject) =>
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) reject(err)
      resolve(
        data
          .split('\n')
          .map(entry => parseInt(entry))
          .filter(num => !isNaN(num))
      )
    })
  )

const calculateFuel = mass => {
  const fuel = Math.floor(mass / 3) - 2
  return fuel <= 0 ? 0 : fuel
}

const calcFuelOfFuel = mass => {
  const fuel = calculateFuel(mass)
  return fuel > 0 ? fuel + calcFuelOfFuel(fuel) : 0
}

const part1 = () => {
  readList(fileName)
    .then(data => {
      const total = data.reduce((acc, current) => {
        const fuel = calculateFuel(current)
        return acc + fuel
      }, 0)
      console.log(`FINAL: ${total}`)
    })
    .catch(err => console.error(`ERROR: ${err}`))
}

const part2 = () => {
  readList(fileName)
    .then(data => {
      const total = data.reduce((acc, current) => {
        const fuel = calculateFuel(current)
        return acc + fuel + calcFuelOfFuel(fuel)
      }, 0)
      console.log(`FINAL: ${total}`)
    })
    .catch(err => console.error(`ERROR: ${err}`))
}

part2()
