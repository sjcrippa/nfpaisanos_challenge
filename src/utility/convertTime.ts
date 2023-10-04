export interface TimeConversionResult {
  hours: string;
  minutes: string;
  seconds: string;
}

// Función para convertir un timestamp a horas, minutos y segundos
export function convertTimestampToTime(timestamp: string): TimeConversionResult {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return {
    hours,
    minutes,
    seconds,
  };
}