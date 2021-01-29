import { thead, row, thItem } from './utils';

export const tableHead = () => {
  const rowItem = row({
    id: thItem('#'),
    name: thItem('Username'),
    email: thItem('Email'),
    edit: thItem(''),
    remove: thItem(''),
  });
  return thead({ rowItem });
};
