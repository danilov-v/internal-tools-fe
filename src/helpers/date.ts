import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export const FULL_DATE_FORMAT = 'd MMMM yyyy';

export const formatDate = (
  date: number | Date,
  formatStr = FULL_DATE_FORMAT,
  options?: {
    locale?: Locale;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    firstWeekContainsDate?: number;
    useAdditionalWeekYearTokens?: boolean;
    useAdditionalDayOfYearTokens?: boolean;
  },
): string => {
  return format(date, formatStr, {
    locale: ru,
    weekStartsOn: 1,
    ...options,
  });
};
