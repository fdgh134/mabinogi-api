const express = require('express');
const cors = require('cors');
const app = express();

const itemsRoute = require('./routes/items');
const ingredientRoutes = require("./routes/ingredients");
app.use("/api/ingredients", ingredientRoutes);

app.use(cors());
app.use(express.json());

app.use('/api/items', itemsRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 서버 실행 중: http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('✅ 마비노기 모바일일 아이템 API입니다. /api/items 또는 /api/ingredients를 사용하세요.');
});