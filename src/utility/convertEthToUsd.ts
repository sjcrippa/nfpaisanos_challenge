import currencyData from '../../public/eth-usd.json'; // Importa el archivo JSON

const cleanNumberString = (str: string) => {
  // Utiliza una expresión regular para eliminar todos los caracteres no numéricos o puntos
  const cleanedStr = str.replace(/[^0-9.]/g, '');

  return cleanedStr;
};
const ethValueStr = currencyData.eth;
const usdValueStr = currencyData.usd;

const ethValueCleaned = cleanNumberString(ethValueStr);
const usdValueCleaned = cleanNumberString(usdValueStr);

const convertETHtoUSD = (ethValue: number | any) => {
  const ethToUsdRate = parseFloat(ethValueCleaned); // Obtiene el valor de ETH desde el archivo JSON
  const usdToEthRate = parseFloat(usdValueCleaned); // Obtiene el valor de USD desde el archivo JSON
  const usdEquivalent = ethValue * (usdToEthRate / ethToUsdRate); // Calcula la conversión
  return usdEquivalent;
};

export default convertETHtoUSD;