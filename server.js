const express = require('express');
const cors = require('cors');
const app = express();

const itemsRoute = require('./routes/items');
const ingredientRoutes = require("./routes/ingredients");
app.use("/api/ingredients", ingredientRoutes);

app.use(cors());
app.use(express.json());

app.use('/api/items', itemsRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 서버 실행 중: http://localhost:${PORT}`);
});