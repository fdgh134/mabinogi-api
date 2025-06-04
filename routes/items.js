const express = require('express');
const router = express.Router();
const { getAllItems, getItemById } = require('../controllers/itemsController');

router.get('/', getAllItems);         // /api/items
router.get('/:id', getItemById);      // /api/items/:id
router.get('/search', searchItems);  // /api/items/search?q=검색어

module.exports = router;