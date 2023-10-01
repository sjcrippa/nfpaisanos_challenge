// Esta función convierte una cantidad de ETH a su equivalente en dólares.

const ethToUsd = (ethAmount: number): number => {
  const ethToDollarRate = 1525.25;
  const dollarsAmount = ethAmount * ethToDollarRate;
  return dollarsAmount;
}

export default ethToUsd;
