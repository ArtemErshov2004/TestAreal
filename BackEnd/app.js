const express = require('express')
const PORT = 3000
const modArticle = require('./models/Articles.js')
const modComment = require('./models/Comments.js')
const migArticle = require('./migrations/articles.js')
const migComment = require('./migrations/comments.js')
const seedArticle = require('./seeders/articles.js')
const seedComment = require('./seeders/comments.js')

app.use(express.json());

const app = express()

