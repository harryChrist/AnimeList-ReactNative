const mongoose = require('mongoose');

const User = new mongoose.Schema({
    user: String,
    email: String,
    password: String,
    library: Array,
    language: String,
})

const Animes = new mongoose.schema({
    id: String,
    tilte: String,
    sinopse: String,
    thumbnail: String,
    Image: String,
})