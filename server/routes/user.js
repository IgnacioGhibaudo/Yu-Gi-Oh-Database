const express = require('express');
const router = express.Router();

router.post('/register');

router.post('/login');

router.put('/profile/:id')

router.delete('/profile/:id')

module.exports = router;
