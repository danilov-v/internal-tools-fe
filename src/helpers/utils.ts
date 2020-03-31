type CompareFunction<T> = (a: T, b: T) => number;
type FilterFunction<T> = (a: T) => boolean;

export const sortBy = <T>(
  fieldName: keyof T,
  inverse = false,
): CompareFunction<T> => (a, b) => {
  if (a[fieldName] < b[fieldName]) {
    return inverse ? 1 : -1;
  }
  if (a[fieldName] > b[fieldName]) {
    return inverse ? -1 : 1;
  }
  return 0;
};

export const filterBy = <T>(
  fieldName: keyof T,
  fieldValue: any,
): FilterFunction<T> => obj => obj[fieldName] === fieldValue;
