import { getUsers, createNewUser, editUser, deleteUser } from './api';
import { row, col } from './utils';

const $table = document.querySelector('.table');

getUsers()
  .then((res) => onUsersRecevied(res))
  .catch((error) => console.log(error));

// Receiving data from the server and displaying it in a table
function onUsersRecevied(result) {
  let html = row({ id: col('id'), name: col('name'), email: col('email') });
  $table.insertAdjacentHTML('beforeend', html);

  result.forEach((el) => {
    let id = col(el.id);
    let name = col(el.name);
    let email = col(el.email);
    let rows = row({ id, name, email });
    $table.insertAdjacentHTML('beforeend', rows);
  });
}

// Function for adding a client to a table



// Table row editing function



// Client data saving function



// Function for removing a customer from a table

