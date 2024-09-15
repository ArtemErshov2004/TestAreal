const express = require('express');
const router = express.Router();
const { Op, Sequelize } = require('sequelize');
const Comment = require('../models/Articles');
const Article = require('../models/Comments');

router.get('/comments', async (req, res) => {
  try {
    const { dateFrom, dateTo } = req.query;
    const comments = await Comment.findAll({
      where: {
        createdAt: {
          [Op.between]: [new Date(dateFrom), new Date(dateTo)],
        },
      },
      include: [
        {
          model: Article,
          attributes: ['id', 'title'],
        },
      ],
      attributes: [
        [Sequelize.fn('COUNT', Sequelize.col('id')), 'commentCount'],
        [Sequelize.col('Article.id'), 'articleId'],
        [Sequelize.col('Article.title'), 'articleTitle'],
      ],
      group: ['Article.id', 'Article.title'],
    });
    res.json(comments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;