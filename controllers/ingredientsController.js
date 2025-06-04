const fs = require("fs");
const path = require("path");
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/items.json")));

// 모든 아이템에서 재료 모아오기
let allIngredients = [];

data.forEach(item => {
  if (item.production && item.production.ingredients) {
    item.production.ingredients.forEach(ing => {
      allIngredients.push({
        productId: item.id,
        ...ing
      });
    });
  }
});

exports.getAllIngredients = (req, res) => {
  res.json(allIngredients);
};

exports.getIngredientsByItemId = (req, res) => {
  const { itemId } = req.params;
  const result = allIngredients.filter(i => i.productId === itemId);
  if (result.length > 0) res.json(result);
  else res.status(404).json({ message: "재료 정보 없음" });
};