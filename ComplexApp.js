/*
   Filename: ComplexApp.js
   Description: A sophisticated and elaborate JavaScript application
*/

// Constants
const MAX_USERS = 100;
const MAX_POSTS = 1000;

// Utility Functions
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

// Classes
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  get fullName() {
    return `${this.name.first} ${this.name.last}`;
  }

  updateEmail(newEmail) {
    this.email = newEmail;
  }
}

class Post {
  constructor(author, content) {
    this.author = author;
    this.content = content;
    this.likes = 0;
  }

  like() {
    this.likes++;
  }
}

// Generate users
const users = [];
for (let i = 0; i < MAX_USERS; i++) {
  const name = {
    first: `User${i}`,
    last: `LastName${i}`,
  };
  const age = getRandomInt(50) + 18; // Age between 18 and 67
  const email = `user${i}@example.com`;
  users.push(new User(name, age, email));
}

// Generate posts
const posts = [];
for (let i = 0; i < MAX_POSTS; i++) {
  const randomUser = users[getRandomInt(MAX_USERS)];
  const content = `This is post #${i} from ${randomUser.fullName}`;
  posts.push(new Post(randomUser, content));
}

// Perform actions
users.forEach((user) => {
  const randomPost = posts[getRandomInt(MAX_POSTS)];
  const age = calculateAge(user.age);

  user.updateEmail(`${user.name.first.toLowerCase()}${age}@example.com`);
  randomPost.like();
});

// Output
console.log(users);
console.log(posts);