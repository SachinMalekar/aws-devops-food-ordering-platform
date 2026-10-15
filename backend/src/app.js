const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const foodRoutes =
require("./routes/foodRoutes");


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/foods", foodRoutes);

app.get('/health', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.status(200).json({ status: 'UP' });
  } catch (error) {
    res.status(500).json({ status: 'DB_ERROR', message: error.message });
  }
});

module.exports = app;
