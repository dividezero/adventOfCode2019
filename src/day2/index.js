const processInput = async input => {
  let index = 0
  while (index < input.length) {
    const current = input[parseInt(index)]
    switch (current) {
      case 1:
      case 2:
        const val1 = input[input[index + 1]]
        const val2 = input[input[index + 2]]
        const val3 = input[index + 3]
        input[parseInt(val3)] = current === 1 ? val1 + val2 : val1 * val2
        // console.log(
        //   `${current === 1 ? 'add' : 'multiply'} ${index + 1}(${val1}) ${index +
        //     2}(${val2}) into ${val3}(${val1 * val2})`
        // )
        index += 4
        break
      case 99:
        index = input.length
        break
    }
  }
  return input
}

module.exports = {
  processInput
}
