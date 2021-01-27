import { row, tableHead, col, link } from './utils';
import { editIcon, removeIcon, saveIcon } from './static';

export const thead = `<thead>${row({
  id: tableHead('#'),
  name: tableHead('Username'),
  email: tableHead('Email'),
  edit: tableHead(''),
  remove: tableHead(''),
})}</thead>`;

export const tbody = `<tbody></tbody>`;

export const buttonEdit = col(link(editIcon));

export const buttonRemove = col(link(removeIcon));

export const buttonSave = col(link(saveIcon));
