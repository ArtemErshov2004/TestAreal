const express = require('express')
const PORT = 3000
const Article = require('./models/Articles.js')
const Comment = require('./models/Comments.js')

app.use(express.json());

const app = express()

