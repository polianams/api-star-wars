export const convertHeight = (heightInCm: string) => {
  const heightInNumber = parseInt(heightInCm);
  const meters = Math.floor(heightInNumber / 100);
  const centimeters = heightInNumber % 100;
  return `${meters}m ${centimeters}cm`;
};
