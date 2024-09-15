const express = require('express')
const PORT = 3000
const articleRoutes = require('./routes/articleRoutes.js')
const commentRoutes = require('./routes/commentRoutes.js')
const analyticRoutes = require('./routes/analyticRoutes.js')

app.use(express.json())

const app = express()

sequelize.authenticate()
    .then(() => {
        console.log('Подключение к базе данных установлено.')
})
    .then(() => {
        app.use('/article', articleRoutes)
        app.use('/article', commentRoutes)
        app.use('/analytic', analyticRoutes)
        app.listen(PORT, () => {
            console.log('Server started on port 3000')
        });
})
    .catch((error) => {
        console.error('Ошибка:', error)
});