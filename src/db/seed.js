const { UserModel, BookModel } = require("../models");
const { getSeedUsers, getSeedBooks } = require("./seed-data");

async function seedUsers() {
  const users = getSeedUsers();

  await UserModel.deleteMany({});
  await UserModel.create([...users]);
}

async function seedBooks() {
  await Promise.all([UserModel.deleteMany({}), BookModel.deleteMany({})]);

  const users = await UserModel.insertMany([...getSeedUsers()]);
  const ids = users.map((user) => user._id);
  const booksWithAuthors = [...getSeedBooks()].map((book) => ({
    ...book,
    author: getRandomItem(ids),
  }));

  return BookModel.insertMany(booksWithAuthors);
}

function getRandomItem(arr = []) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = {
  seedUsers: seedUsers,
  seedBooks: seedBooks,
  getRandomItem: getRandomItem,
};
