import { thead, row, thItem, link, button } from './utils';
import { editIcon } from './static';

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
// export const buttonSave = link({ saveIcon });
// export const buttonAdd = button('Добавить клиента', 'button-add');
