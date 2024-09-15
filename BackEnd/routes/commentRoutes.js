const express = require('express');
const router = express.Router();
const Comment = require('../models/Comments');
const Article = require('../models/Articles');

router.post('/:articleId/comment', async (req, res) => {
  try {
    const { text } = req.body;
    const article = await Article.findByPk(req.params.articleId);
    if (!article) {
      return res.status(404).json({ error: 'Статья не найдена' });
    }
    const comment = await Comment.create({
      text,
      articleId: req.params.articleId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:articleId/comment/:id', async (req, res) => {
  try {
    const comment = await Comment.findOne({
      where: { id: req.params.id, articleId: req.params.articleId },
    });
    if (!comment) {
      return res.status(404).json({ error: 'Комментарий не найден' });
    }
    res.json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });}
});

router.get('/:articleId/comments', async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { articleId: req.params.articleId },
    });
    res.json(comments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.patch('/:articleId/comment/:id', async (req, res) => {
  try {
    const { text } = req.body;
    const [rowsUpdated, [updatedComment]] = await Comment.update(
      { text, updatedAt: new Date() },
      { where: { id: req.params.id, articleId: req.params.articleId }, returning: true }
    );
    if (rowsUpdated === 0) {
      return res.status(404).json({ error: 'Комментарий не найден' });
    }
    res.json(updatedComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:articleId/comment/:id', async (req, res) => {
  try {
    const deletedRows = await Comment.destroy({
      where: { id: req.params.id, articleId: req.params.articleId },
    });
    if (deletedRows === 0) {
      return res.status(404).json({ error: 'Комментарий не найден' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;