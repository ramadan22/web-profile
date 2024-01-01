import { format } from 'date-fns';

import idLocale from 'date-fns/locale/id';

export const formatDate = (date: string, type: string) => (
  format(new Date(date), type, { locale: idLocale })
);
