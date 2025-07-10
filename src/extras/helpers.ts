export const getWeatherType = (code: number) => {
  if ([0, 1, 2, 3].includes(code)) return 'sun';
  if ([71, 73, 75, 77, 85, 86].includes(code)) return 'snow';

  return 'rain';
};

export const makeCapital = (string: string) => {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
};
