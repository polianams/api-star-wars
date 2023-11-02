export const formatHeight = (heightInCm: string) => {
  const heightInNumber = parseInt(heightInCm);
  const meters = Math.floor(heightInNumber / 100);
  const centimeters = heightInNumber % 100;
  return `${meters}m ${centimeters}cm`;
};

export const formatMeasurement = (measurement: string, unit: string) => {
  const numericValue = parseFloat(measurement);
  if (!isNaN(numericValue)) {
    return `${numericValue.toLocaleString()} ${unit}`;
  }
  return measurement;
};

export const formatPopulation = (population: string) => {
  const numericValue = parseInt(population);
  if (!isNaN(numericValue)) {
    return numericValue.toLocaleString() + " inhabitants";
  }
  return population;
};
