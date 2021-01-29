'use strict';

import { getUsers, editUser, deleteUser } from './api';
import { table, tbody, row, col, div, image, button, input } from './utils';
import { tableHead } from './templates';

const $container = document.querySelector('.container');
const buttonAdd = button('Добавить клиента', 'button-add');

// Receiving data from the server and displaying it in a table

getUsers()
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
        let editLink = div('block-icon edit-icon');
        let editTd = col(editLink);
        let removeLink = div('block-icon remove-icon');
        let removeTd = col(removeLink);
        let rows = row({ id, userName, email, editTd, removeTd });
        body.appendChild(rows);

        editLink.addEventListener('click', runUserEdit);
        removeLink.addEventListener('click', runUserDelete);
      })
    : '';
}

// Function for adding a client to a table

buttonAdd.addEventListener('click', () => {
  const $tbody = $container.querySelector('tbody');
  let counter = Number($tbody.querySelectorAll('tr:last-child td:first-child')[0].textContent) + 1;

  let editLink = div(image('./images/edit_icon.svg'), 'block-icon');
  let editTd = col(editLink);
  let removeLink = div(image('./images/remove_icon.svg'), 'block-icon');
  let removeTd = col(removeLink);
  let [id, userName, email] = [col(counter), col(''), col('')];
  let rows = row({ id, userName, email, editTd, removeTd });
  $tbody.appendChild(rows);

  editLink.addEventListener('click', runUserEdit);
  removeLink.addEventListener('click', runUserDelete);
});

// Table row editing function

function runUserEdit() {
  console.log(1);
  const [col1, col2] = [this.closest('tr').children[1], this.closest('tr').children[2]];
  const [input1, input2] = [input(col1.textContent), input(col2.textContent)];
  [input1.className, input2.className] = ['input-basic', 'input-basic'];
  this.className = 'block-icon save-icon';
  col1.textContent = '';
  col2.textContent = '';
  col1.appendChild(input1);
  col2.appendChild(input2);
  input1.focus();
  this.addEventListener('click', runSaveUserData);
  this.removeEventListener('click', runUserEdit);
}

// Client data saving function

function runSaveUserData() {
  console.log(2);
  const row = this.closest('tr');
  let input1 = row.children[1].firstChild;
  let input2 = row.children[2].firstChild;
  let data = { id: Number(row.firstChild.textContent), name: input1.value, email: input2.value };

  if (data.id <= 10) {
    editUser(data)
      .then(() => {
        alert('Данные успешно сохранились');
        row.children[1].textContent = input1.value;
        row.children[2].textContent = input2.value;
        this.className = 'block-icon edit-icon';
        this.addEventListener('click', runUserEdit);
        this.removeEventListener('click', runSaveUserData);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    row.children[1].textContent = input1.value;
    row.children[2].textContent = input2.value;
    this.className = 'block-icon edit-icon';
    this.addEventListener('click', runUserEdit);
    this.removeEventListener('click', runSaveUserData);
  }
}

// Function for removing a customer from a table

function runUserDelete() {
  let id = Number(this.closest('tr').firstChild.textContent);
  if (window.confirm('Вы действительно хотите удалить задачу?')) {
    deleteUser(id)
      .then(() => this.closest('tbody').removeChild(this.closest('tr')))
      .catch((error) => {
        console.log(error.message);
        alert('Не удалось удалить задачу');
      });
  }
}
