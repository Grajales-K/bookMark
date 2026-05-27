// This is a scaffolding file we have provided for you which allows you to manage stored data for your application.
// It can be loaded into index.html.
// You should not need to modify it to complete the project.

export function getUsers() {
  const users = [
    {
      id: 101,
      name: 'Alice Smith',
      bookmarks: [
        {
          title: 'MDN Web Docs',
          description: 'Excellent JS documentation',
          createdAt: '2026-05-10'
        },
        {
          title: 'CSS Tricks',
          description: 'Great for layout tips',
          createdAt: '2026-05-12'
        }
      ]
    },
    {
      id: 102,
      name: 'Bob Jones',
      bookmarks: [
        {
          title: 'GitHub',
          description: 'My repositories',
          createdAt: '2026-04-20'
        }
      ]
    },
    { id: 103, name: 'Charlie Brown', bookmarks: [] },
    {
      id: 104,
      name: 'Diana Prince',
      bookmarks: [
        {
          title: 'StackOverflow',
          description: 'Debugging help',
          createdAt: '2026-05-25'
        }
      ]
    },
    {
      id: 105,
      name: 'Evan Wright',
      bookmarks: [
        {
          title: 'Dev.to',
          description: 'Developer community articles',
          createdAt: '2026-05-01'
        }
      ]
    }
  ];
  return users;
}

/**
 * Get a list of user ids
 *
 * @returns {string[]} List of user id strings
 */
export function getUserIds() {
  // return ['1', '2', '3', '4', '5'];
  const userIds = getUsers().map((user) => user.id.toString());
  return userIds;
}

export function getUsersIdAndName() {
  const users = getUsers();
  return users.map((user) => ({ id: user.id, name: user.name }));
}

/**
 * Get data associated with a specific user.
 *
 * @param {string} userId The user id to get data for
 * @returns {any | null} The data associated with the user
 */
export function getData(userId) {
  return JSON.parse(localStorage.getItem(`stored-data-user-${userId}`));
}

/**
 * Store data for a specific user.
 *
 * @param {string} userId The user id to store data for
 * @param {any} data The data to store
 */
export function setData(userId, data) {
  localStorage.setItem(`stored-data-user-${userId}`, JSON.stringify(data));
}

/**
 * Clears all data associated with a specific user. NOTE: This is provided to help with development, and is not required in the final code
 *
 * @param {string} userId The user id to clear associated data for
 */
export function clearData(userId) {
  localStorage.removeItem(`stored-data-user-${userId}`);
}
