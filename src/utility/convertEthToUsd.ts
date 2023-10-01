// Esta función convierte una cantidad de ETH a su equivalente en dólares.
import data from '../../public/eth-usd.json'

const ethToUsd = (ethAmount: number): number => {
  const ethToDollarRate = parseFloat(data.usd.replace(',', ''));
  const dollarsAmount = ethAmount * ethToDollarRate;
  return dollarsAmount;
}

export default ethToUsd;
