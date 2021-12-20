const mongoose = require("mongoose");

function getSeedUsers() {
  return [
    {
      _id: new mongoose.Types.ObjectId("000000000000000000001001"),
      uid: "2IKNm1i6yYdqKGvQTKHOrZVmnin2",
      firstName: "Adrian",
      lastName: "Sánchez",
      email: "skualed@gmail.com",
      speaks: ["spanish", "english", "javascript"],
    },
  ];
}

function getSeedBooks() {
  return [
    {
      _id: new mongoose.Types.ObjectId("000000000000000000002001"),
      title: "Incubus Sky",
      author: null,
      genre: "Fantasy",
      year: 2010,
      pages: 220,
    },
    {
      _id: new mongoose.Types.ObjectId("000000000000000000002002"),
      title: "The Twilight Wanderer",
      author: null,
      genre: "Fantasy",
      year: 2012,
      pages: 300,
    },
    {
      _id: new mongoose.Types.ObjectId("000000000000000000002003"),
      title: "City of Monday",
      author: null,
      genre: "Crime",
      year: 2020,
      pages: 250,
    },
    {
      _id: new mongoose.Types.ObjectId("000000000000000000002004"),
      title: "The Saturday's Shaman",
      author: null,
      genre: "Romance",
      year: 2015,
      pages: 280,
    },
    {
      _id: new mongoose.Types.ObjectId("000000000000000000002005"),
      title: "The Underground of the Bane",
      author: null,
      genre: "Thriller",
      year: 2020,
      pages: 20,
    },
    {
      _id: new mongoose.Types.ObjectId("000000000000000000002006"),
      title: "God in the Roadtrip",
      author: null,
      genre: "Fantasy",
      year: 2018,
      pages: 320,
    },
    {
      _id: new mongoose.Types.ObjectId("000000000000000000002007"),
      title: "Sunken Haven",
      author: null,
      genre: "Comedy",
      year: 2017,
      pages: 240,
    },
    {
      _id: new mongoose.Types.ObjectId("000000000000000000002008"),
      title: "The Harrowing Temper",
      author: null,
      genre: "Crime",
      year: 2012,
      pages: 120,
    },
    {
      _id: new mongoose.Types.ObjectId("000000000000000000002009"),
      title: "Sleep of Hallows",
      author: null,
      genre: "Fantasy",
      year: 2012,
      pages: 220,
    },
    {
      _id: new mongoose.Types.ObjectId("000000000000000000002010"),
      title: "The Cavern's Fire",
      author: null,
      genre: "Crime",
      year: 2014,
      pages: 240,
    },
  ];
}

module.exports = {
  getSeedUsers: getSeedUsers,
  getSeedBooks: getSeedBooks,
};
