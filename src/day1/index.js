const calculateFuel = mass => {
  const fuel = Math.floor(mass / 3) - 2
  return fuel <= 0 ? 0 : fuel
}

const calcFuelOfFuel = mass => {
  const fuel = calculateFuel(mass)
  return fuel > 0 ? fuel + calcFuelOfFuel(fuel) : 0
}

module.exports = {
  calculateFuel,
  calcFuelOfFuel
}
