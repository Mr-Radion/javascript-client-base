import { getUsers, createNewUser, editUser, deleteUser } from './api';
import { row, col, tableHead } from './utils';

const $table = document.querySelector('.table');

getUsers()
  .then((res) => onUsersRecevied(res))
  .catch((error) => console.log(error));

// Receiving data from the server and displaying it in a table
function onUsersRecevied(result) {
  let html = `<thead>${row({ id: tableHead('#'), name: tableHead('Username'), email: tableHead('Email') })}</thead>`;
  $table.insertAdjacentHTML('beforeend', html);
  $table.insertAdjacentHTML('beforeend', '<tbody></tbody>');
  let $tbody = $table.lastChild;

  result.forEach((el) => {
    let id = col(el.id);
    let name = col(el.name);
    let email = col(el.email);
    let rows = row({ id, name, email });
    $tbody.insertAdjacentHTML('beforeend', rows);
  });
}

// Function for adding a client to a table

// Table row editing function

// Client data saving function

// Function for removing a customer from a table
