export function HexToRgb(color: string) {
  const value = color.replace('#', '').match(/.{1,2}/g) || '';

  const rgbColor = [
    parseInt(value[0], 16),
    parseInt(value[1], 16),
    parseInt(value[2], 16),
  ];
  return `rgb(${rgbColor.join(', ')})`;
}

export function completeNumber(num: number) {
  if (num > 0 && num < 10) return `0${num}`;

  return num;
}

export function isValidURL(url: string) {
  let newUrl;
  try {
    newUrl = new URL(url);
  } catch (_) {
    return false;
  }
  return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
}

export function shuffle(array: Array<any>) {
  const newArray = array;
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [array[j], array[i]];
  }

  return newArray;
}
