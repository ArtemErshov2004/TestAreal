const express = require('express');
const router = express.Router();
const Article = require('../models/Articles.js');

router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    const article = await Article.create({ title, content, createdAt: new Date(), updatedAt: new Date() });
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Статья не найдена' });
    }
    res.json(article);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.json(articles);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { title, content } = req.body;
    const [rowsUpdated, [updatedArticle]] = await Article.update(
      { title, content, updatedAt: new Date() },
      { where: { id: req.params.id }, returning: true }
    );
    if (rowsUpdated === 0) {
      return res.status(404).json({ error: 'Статья не найдена' });
    }
    res.json(updatedArticle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedRows = await Article.destroy({ where: { id: req.params.id } });
    if (deletedRows === 0) {
      return res.status(404).json({ error: 'Статья не найдена' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;