export function HexToRgb(color: string) {
  const value = color.replace('#', '').match(/.{1,2}/g) || '';

  const rgbColor = [
    parseInt(value[0], 16),
    parseInt(value[1], 16),
    parseInt(value[2], 16),
  ];
  return `rgb(${rgbColor.join(', ')})`;
}
