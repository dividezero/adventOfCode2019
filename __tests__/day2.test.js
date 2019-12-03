const { processInput } = require('../src/day2')

describe('Day 2 Part 1', () => {
  test('1,0,0,0,99 becomes 2,0,0,0,99 (1 + 1 = 2)', () => {
    const input = [1, 0, 0, 0, 99]
    const expected = [2, 0, 0, 0, 99]
    processInput(input).then(result => expect(result).toBe(expected))
  })

  test('2,3,0,3,99 becomes 2,3,0,6,99 (3 * 2 = 6)', () => {
    const input = [2, 3, 0, 3, 99]
    const expected = [2, 3, 0, 6, 99]
    processInput(input).then(result => expect(result).toBe(expected))
  })

  test('2,4,4,5,99,0 becomes 2,4,4,5,99,9801 (99 * 99 = 9801)', () => {
    const input = [2, 4, 4, 5, 99, 0]
    const expected = [2, 4, 4, 5, 99, 9801]
    processInput(input).then(result => expect(result).toBe(expected))
  })

  test('1,1,1,4,99,5,6,0,99 becomes 30,1,1,4,2,5,6,0,99', () => {
    const input = [1, 1, 1, 4, 99, 5, 6, 0, 99]
    const expected = [30, 1, 1, 4, 2, 5, 6, 0, 99]
    processInput(input).then(result => expect(result).toBe(expected))
  })
})

describe('Day 2 Part 2', () => {})
