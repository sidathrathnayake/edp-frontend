export const getColor = ({ type, color, shade }: ColorParams) => {
  const colorData = `${type}-${color}-${shade}`;
  return colorData;
};
