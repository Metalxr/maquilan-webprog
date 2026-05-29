const express = require('express');
const { getArticles, createArticle } = require('../controllers/articleController');
const router = express.Router();

router.route('/').get(getArticles).post(createArticle);

module.exports = router;