// backend/routes/topic.js

const express = require('express');
const router = express.Router();
const Topic = require('../models/topic');

// Utwórz nowy temat
router.post('/', async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const newTopic = new Topic({ title, content, author });
    await newTopic.save();
    res.status(201).json(newTopic);
  } catch (error) {
    res.status(500).json({ message: 'Error creating topic', error });
  }
});

// Pobierz wszystkie tematy
router.get('/', async (req, res) => {
  try {
    const topics = await Topic.find();
    res.status(200).json(topics);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching topics', error });
  }
});

// Pobierz temat po ID
router.get('/:id', async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id);
    if (!topic) {
      return res.status(404).json({ message: 'Topic not found' });
    }
    res.status(200).json(topic);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching topic', error });
  }
});

module.exports = router;
