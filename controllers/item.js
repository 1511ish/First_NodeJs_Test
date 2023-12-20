const Item = require('../models/Items');


async function addItem(req, res) {
    try {
        const data = await Item.create({ item_name: req.body.item_name, description: req.body.description, price: req.body.price, quantity: req.body.quantity });
        res.status(201).json({ newItemDetail: data });
        console.log('SUCCESSFULLY ADDED');
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getAll(req, res) {
    try {
        const data = await Item.findAll();
        res.status(200).json({ allItems: data });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}
async function buyOne(req, res) {
    try {
        const id = req.params.id;
        const item = await Item.findByPk(id);
        item.quantity = item.quantity - 1;
        await item.save();
        res.status(200).json(item);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function buyTwo(req, res) {
    try {
        const id = req.params.id;
        const item = await Item.findByPk(id);
        item.quantity = item.quantity - 2;
        await item.save();
        res.status(200).json(item);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function buyThree(req, res) {
    try {
        const id = req.params.id;
        const item = await Item.findByPk(id);
        item.quantity = item.quantity - 3;
        await item.save();
        res.status(200).json(item);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports = { addItem, getAll, buyOne, buyTwo, buyThree };
