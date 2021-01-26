import { row, tableHead } from './utils';

export const thead = `<thead>${row({
  id: tableHead('#'),
  name: tableHead('Username'),
  email: tableHead('Email'),
})}</thead>`;

export const tbody = `<tbody></tbody>`;
