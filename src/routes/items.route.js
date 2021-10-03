const express = require('express');
const router = express.Router();
// In memory Storage
const items = [
    {
        id: 1,
        name: 'Test 1',
        description: 'Test description 1'
    },
    {
        id: 2,
        name: 'Test 2',
        description: 'Test description 2'
    },
    {
        id: 3,
        name: 'Test 3',
        description: 'Test description 3'
    },
    {
        id: 4,
        name: 'Test 4',
        description: 'Test description 4'
    },
    {
        id: 5,
        name: 'Test 5',
        description: 'Test description 5'
    },
    {
        id: 6,
        name: 'Test 6',
        description: 'Test description 6'
    }
];

router.get('/', function(req, res) {
  res.status(200).send(items);
});

router.get('/:id/', function(req, res) {
    const item = items.find(item => item.id == id);
    if (item) {
        res.status(200).send(item);
    } else {
        res.status(404).send({ error: "Item not found"});
    }
});

router.post('/', function(req, res) {
    const item = req.body;
    if (item) {
        items.push(item);
        res.status(201).send();
    } else {
        res.status(400).send({ error: "Invalid request"});
    }
});

// START ADD v2 Methods

// END ADD v2 Methods


module.exports = {
    router
}
