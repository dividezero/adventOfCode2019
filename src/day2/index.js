const fs = require('fs')

const fileName = './input.txt'

const readInput = () =>
  new Promise((resolve, reject) =>
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) reject(err)
      resolve(
        data
          .split(',')
          .map(entry => parseInt(entry))
          .filter(num => !isNaN(num))
      )
    })
  )

const doNext = async () => {
  const input = await readInput()

  input[1] = 12
  input[2] = 2

  let index = 0
  while (index < input.length) {
    const current = input[index]

    let val1 = undefined
    let val2 = undefined
    let val3 = undefined
    switch (current) {
      case 1:
      case 2:
        val1 = input[index + 1]
        val2 = input[index + 2]
        val3 = input[index + 3]
        input[val3] = current === 1 ? val1 + val2 : val1 * val2
        console.log(
          `${current === 1 ? 'add' : 'multiply'} ${index + 1}(${val1}) ${index +
            2}(${val2}) into ${val3}(${val1 * val2})`
        )
        index += 4
        break
      case 99:
        index = input.length
        break
    }
  }

  return input[0]
}

doNext()
  .then(console.log)
  .catch(console.error)
