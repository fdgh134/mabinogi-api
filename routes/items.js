const express = require('express');
const router = express.Router();
const { getAllItems, getItemById, searchItems } = require('../controllers/itemsController');

router.get('/', getAllItems);         // /api/items
router.get('/search', searchItems);  // /api/items/search?q=검색어
router.get('/:id', getItemById);      // /api/items/:id

module.exports = router;