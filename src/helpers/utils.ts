export const sleep = (milliseconds = 1000): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};
