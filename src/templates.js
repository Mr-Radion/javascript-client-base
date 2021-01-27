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

export const buttonEdit = link(editIcon);

export const buttonTemplateRemove = link(removeIcon);

export const buttonSave = link(saveIcon);
