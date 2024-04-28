const router = require('express').Router();

//Handle incoming GET requests to /tasks
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'tasks were fetched',
    });
});

//Handle incoming GET requests to /tasks for specific id
router.get('/:tasksId', (req, res, next) => {
    const tasksId = req.params.tasksId;
    if (tasksId === 'special') {
        return res.status(200).json({ message: `tasks with id: ${tasksId}` });
    }
    res.status(200).json({ message: 'Not a special task' });
});

//Handle incoming POST requests to /tasks
router.post('/', (req, res) => {
    const task = {
        tasksId: req.body.tasksId,
        quantity: req.body.quantity,
    };
    res.status(201).json({
        message: 'task was created',
        task: task,
    });
});

//Handle incoming PATCH requests to /products for specific id
router.put('/:id', (req, res, next) => {
    res.status(200).json({ message: 'Updated task!' });
});

//Handle incoming DELETE requests to /products for specific id
router.delete('/:id', (req, res, next) => {
    res.status(200).json({ message: 'Deleted task!' });
});

module.exports = router;