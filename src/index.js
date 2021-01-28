'use strict';

import { getUsers, createNewUser, editUser, deleteUser } from './api';
import { table, thead, tbody, row, col, link, button } from './utils';
import { tableHead, buttonSave } from './templates';
import { editIcon, removeIcon, saveIcon } from './static';

const $container = document.querySelector('.container');
const buttonAdd = button('Добавить клиента', 'button-add');

// let data = Map();

// Receiving data from the server and displaying it in a table
let usersRecevied = getUsers()
  .then(onUsersRender)
  .catch((error) => console.log(error));

function onUsersRender(users) {
  let head = tableHead();
  let body = tbody();
  $container.appendChild(buttonAdd);
  $container.appendChild(table({ head, body }));

  users
    ? users.forEach((user) => {
        let id = col(user.id);
        let userName = col(user.name);
        let email = col(user.email);
        let buttonEdit = link(editIcon);
        let editTd = col(buttonEdit);
        let removeLink = link(removeIcon);
        let removeTd = col(removeLink);
        let rows = row({ id, userName, email, editTd, removeTd });
        body.appendChild(rows);

        // buttonEdit.addEventListener('click', (e) => runUserEdit.call($editLink, e, user.id));
        removeLink.addEventListener('click', (e) => runUserDelete.call(removeLink, e, user.id));
      })
    : '';
}

// Function for adding a client to a table

buttonAdd.addEventListener('click', () => {
  $table.insertAdjacentHTML('beforeend', thead);
  $table.insertAdjacentHTML('beforeend', tbody);
  let $tbody = $table.lastChild;

  let $rows = document.createElement('tr');

  let $idTd = document.createElement('td');
  $idTd.insertAdjacentHTML('beforeend', counter);
  let $userTd = document.createElement('td');
  $userTd.insertAdjacentHTML('beforeend', '');
  let $emailTd = document.createElement('td');
  $emailTd.insertAdjacentHTML('beforeend', '');

  let $removeTd = document.createElement('td');
  let $removeLink = document.createElement('a');
  $removeLink.insertAdjacentHTML('beforeend', removeIcon);
  $removeTd.appendChild($removeLink);

  let $editTd = document.createElement('td');
  let $editLink = document.createElement('a');
  $editLink.insertAdjacentHTML('beforeend', editIcon);
  $editTd.appendChild($editLink);

  $rows.appendChild($idTd);
  $rows.appendChild($userTd);
  $rows.appendChild($emailTd);
  $rows.appendChild($editTd);
  $rows.appendChild($removeTd);
  $tbody.appendChild($rows);

  // buttonCustomRemove.addEventListener('click', runUserDelete);
  let counter =
    Number(Object.values($table.lastChild.lastElementChild.children)[0].textContent) + 1;
  // let [id, userName, email] = [col(counter), col(''), col('')];
  // let rows = row({ id, userName, email });
  // $table.lastChild.insertAdjacentHTML('beforeend', rows);
  // <input autofocus/>
  // <input />.focus()
  // data
});

// Table row editing function

function runUserEdit(e, id) {
  e.preventDefault();
  // let input = document.createElement('input');
  // input.className = 'input';
  // input.value = this.firstElementChild.innerHTML;
  // this.firstElementChild.innerHTML = '';
  // this.appendChild(input);
  // this.removeEventListener('click', runEdit);

  // let self = this;

  // input.addEventListener('blur', function() {
  //   self.firstElementChild.innerHTML = input.value;
  //   self.removeChild(input);
  //   self.addEventListener('click', runEdit);
  // });

  let data = { id };

  editUser(data)
    .then(() => this.closest('tbody').removeChild(this.closest('tr')))
    .catch((error) => {
      console.log(error.message);
    });
}

// Client data saving function

// Function for removing a customer from a table

function runUserDelete(e, id) {
  e.preventDefault();
  if (window.confirm('Вы действительно хотите удалить задачу?')) {
    deleteUser(id)
      .then(() => this.closest('tbody').removeChild(this.closest('tr')))
      .catch((error) => {
        console.log(error.message);
        alert('Не удалось удалить задачу');
      });
  }
}
