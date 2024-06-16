const router = require('express').Router();

let items = []; // In-memory array to store items
let currentId = 1;

// Handle incoming GET requests to /items
router.get('/', (req, res) => {
    res.status(200).json(items);
});

// Handle incoming GET requests to /items/:id
router.get('/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find(i => i.id === itemId);
    if (item) {
        res.status(200).json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// Handle incoming POST requests to /items
router.post('/', (req, res) => {
    const newItem = {
        id: currentId++,
        name: req.body.name,
        description: req.body.description
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

// Handle incoming PUT requests to /items/:id
router.put('/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find(i => i.id === itemId);
    if (item) {
        item.name = req.body.name || item.name;
        item.description = req.body.description || item.description;
        res.status(200).json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// Handle incoming DELETE requests to /items/:id
router.delete('/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const itemIndex = items.findIndex(i => i.id === itemId);
    if (itemIndex !== -1) {
        items.splice(itemIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

module.exports = router;
