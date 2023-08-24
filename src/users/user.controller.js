const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    res.render('createUser.handlebars');
});

router.post('/', (req, res) => {
    res.json({ message: '¡Creaste un usuario!' });
});


module.exports = router
