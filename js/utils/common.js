export const compareObj = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

export const formatTime = (number) => {
  // const hours = Math.floor(number / 3600)
  //   .toString()
  //   .padStart(2, 0);

  const minutes = Math.floor((number / 60) % 60)
    .toString()
    .padStart(2, 0);

  const seconds = Math.floor(number % 60)
    .toString()
    .padStart(2, 0);

  return `${minutes}:${seconds}`;
};
