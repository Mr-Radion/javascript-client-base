import { getUsers, createNewUser, editUser, deleteUser } from './api';
import { row, col } from './utils';
import { thead, tbody } from './templates';

const $table = document.querySelector('.table');
$table.insertAdjacentHTML('beforeend', thead);
$table.insertAdjacentHTML('beforeend', tbody);
let $tbody = $table.lastChild;

// Receiving data from the server and displaying it in a table
let usersRecevied = getUsers()
  .then((res) => onUsersRender(res))
  .catch((error) => console.log(error));

function onUsersRender(result) {
  result
    ? result.forEach((el) => {
        let id = col(el.id);
        let name = col(el.name);
        let email = col(el.email);
        let rows = row({ id, name, email });
        $tbody.insertAdjacentHTML('beforeend', rows);
      })
    : '';
}

// Function for adding a client to a table

// Table row editing function

// Client data saving function

// Function for removing a customer from a table
