import { row, tableHead } from './utils';

export const thead = `<thead>${row({
  id: tableHead('#'),
  name: tableHead('Username'),
  email: tableHead('Email'),
  edit: tableHead(''),
  remove: tableHead(''),
})}</thead>`;

export const tbody = `<tbody></tbody>`;

export const editIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7636 3.2636C17.1151 2.91213 17.6849 2.91213 18.0364 3.2636L21.0364 6.2636C21.3879 6.61508 21.3879 7.18492 21.0364 7.5364L18.5364 10.0364C18.1849 10.3879 17.6151 10.3879 17.2636 10.0364L14.2636 7.0364C13.9121 6.68492 13.9121 6.11508 14.2636 5.7636L16.7636 3.2636ZM16.1728 6.4L17.9 8.12721L19.1272 6.9L17.4 5.17279L16.1728 6.4ZM12.2636 7.7636C12.6151 7.41213 13.1849 7.41213 13.5364 7.7636L16.5364 10.7636C16.8879 11.1151 16.8879 11.6849 16.5364 12.0364L7.5364 21.0364C7.36761 21.2052 7.13869 21.3 6.9 21.3H3.9C3.40294 21.3 3 20.8971 3 20.4V17.4C3 17.1613 3.09482 16.9324 3.2636 16.7636L12.2636 7.7636ZM4.8 17.7728V19.5H6.52721L14.6272 11.4L12.9 9.67279L4.8 17.7728ZM9.41213 20.8879L10.3121 19.9879C10.3684 19.9316 10.4447 19.9 10.5243 19.9H17.3394C17.5791 19.9 17.722 20.167 17.5891 20.3664L16.9891 21.2664C16.9334 21.3499 16.8398 21.4 16.7394 21.4H9.62426C9.35699 21.4 9.22314 21.0769 9.41213 20.8879Z" fill="#3B3E3C"/>
</svg>`;

export const saveIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.63649 12.3636C8.28502 12.0121 7.71517 12.0121 7.3637 12.3636C7.01223 12.7151 7.01223 13.2849 7.3637 13.6364L11.3637 17.6364C11.5325 17.8052 11.7614 17.9 12.0001 17.9C12.2388 17.9 12.4677 17.8052 12.6365 17.6364L16.6365 13.6364C16.988 13.2849 16.988 12.7151 16.6365 12.3636C16.285 12.0121 15.7152 12.0121 15.3637 12.3636L12.9001 14.8272V3.00001C12.9001 2.50295 12.4972 2.10001 12.0001 2.10001C11.503 2.10001 11.1001 2.50295 11.1001 3.00001V14.8272L8.63649 12.3636ZM5.9001 10C5.9001 9.39249 6.39258 8.90001 7.0001 8.90001H8.5001C8.99715 8.90001 9.4001 8.49706 9.4001 8.00001C9.4001 7.50295 8.99715 7.10001 8.5001 7.10001H7.0001C5.39847 7.10001 4.1001 8.39838 4.1001 10V19C4.1001 20.6016 5.39847 21.9 7.0001 21.9H17.0001C18.6017 21.9 19.9001 20.6016 19.9001 19V10C19.9001 8.39838 18.6017 7.10001 17.0001 7.10001H15.5001C15.003 7.10001 14.6001 7.50295 14.6001 8.00001C14.6001 8.49706 15.003 8.90001 15.5001 8.90001H17.0001C17.6076 8.90001 18.1001 9.39249 18.1001 10V19C18.1001 19.6075 17.6076 20.1 17.0001 20.1H7.0001C6.39258 20.1 5.9001 19.6075 5.9001 19V10Z" fill="#3B3E3C"/>
</svg>`;

export const removeIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 10L13.7 17M10.3 17L10 10M6 6L6.87554 19.133C6.94558 20.1836 7.81818 21 8.87111 21H15.1289C16.1818 21 17.0544 20.1836 17.1245 19.133L18 6M6 6H9M6 6H4M18 6H20M18 6H15M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6M15 6H9" stroke="#3B3E3C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
