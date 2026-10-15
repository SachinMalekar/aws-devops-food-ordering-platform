const Food = require("../models/Food");

exports.getFoods = async (req, res) => {
  const foods = await Food.findAll();

  res.json(foods);
};

exports.createFood = async (req, res) => {
  const food = await Food.create(req.body);

  res.status(201).json(food);
};
