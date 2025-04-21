export const generateId = (min: number, max: number, arrayId: number[]) => {
  let newId;
  do {
    newId = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (arrayId.includes(newId));
  return newId;
};
