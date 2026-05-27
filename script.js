// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getUserIds, getUsers, getUsersIdAndName } from './storage.js';

window.onload = function () {
  const users = getUsersIdAndName();
  document.querySelector(
    '#userCount'
  ).innerText = `There are ${users.length} users`;

  const selectElement = document.querySelector('#userSelect');
  users.forEach((user) => {
    const option = document.createElement('option');
    option.value = user.id;
    option.text = `${user.name}`;
    selectElement.appendChild(option);
  });

  const usersData = getUsers();
  console.log(usersData);
};
