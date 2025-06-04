const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/items.json');

// 전체 목록
const getAllItems = (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  res.json(data);
};

// ID로 상세 검색
const getItemById = (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  const item = data.find(i => i.id === req.params.id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
};

module.exports = { getAllItems, getItemById };

// 검색 기능
const searchItems = (req, res) => {
  const query = req.query.q?.toLowerCase() || '';
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

  const result = data.filter(item =>
    item.name.toLowerCase().includes(query) ||
    item.id.toLowerCase().includes(query)
  );

  res.json(result);
};

module.exports = { getAllItems, getItemById, searchItems };