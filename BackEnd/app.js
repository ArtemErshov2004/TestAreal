const express = require('express')
const PORT = 3000
const modArticle = require('./models/Articles.js')
const modComment = require('./models/Comments.js')
const migArticle = require('./migrations/articles.js')
const migComment = require('./migrations/comments.js')

app.use(express.json());

const app = express()

