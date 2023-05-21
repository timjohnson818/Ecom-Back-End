const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({include: [Product],}).then((categories) => res.json(categories));
});

router.get('/:id', (req, res) => {
  Category.findOne({where: {id: req.params.id},include:[Product],}).then((category) => res.json(category));
});

router.post('/', (req, res) => {
  Category.create(req.body).then((category) => res.json(category));
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {where: {id: req.params.id}}).then((category) => res.json(category));
});

router.delete('/:id', (req, res) => {
  Category.destroy({where:{id:req.params.id}}).then((category) => res.json(category));
});

module.exports = router;
