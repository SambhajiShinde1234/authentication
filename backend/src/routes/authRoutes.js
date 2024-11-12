import express from 'express';

const router = express.Router();

// Example authentication route
router.post('/login', (req, res) => {
  res.send('Login route');
});

router.post('/register', (req, res) => {
  res.send('Register route');
});

export default router;
