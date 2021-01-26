import { getUsers, createNewUser, editUser, deleteUser } from './api';
import { row, col } from './utils';

const $table = document.querySelector('.table');

getUsers().then((res) => onUsersRecevied(res));

function onUsersRecevied(result) {
  result.forEach((el) => {
    let id = col(el.id);
    let name = col(el.name);
    let email = col(el.email);
    let html = row({id, name, email});
    $table.insertAdjacentHTML('beforeend', html);
  });
}
