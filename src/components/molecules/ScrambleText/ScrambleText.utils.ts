export const randomItem = (array: Array<string>) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const nextItem = (array: Array<string>, currentItem: string) => {
  const currentIndex = array.indexOf(currentItem);
  const bound = array.length;
  const nextIndex = (currentIndex + bound + 1) % bound;

  return array[nextIndex];
};
