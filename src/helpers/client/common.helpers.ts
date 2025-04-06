export const getColor = ({ type, color, shade }: ColorParams) => {
  return `${type}-${color}-${shade}`;
};
