const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

notes.get('/', (req, res) => {
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
  });
  
  // POST Route for a new UX/UI tip
  notes.post('/', (req, res) => {
    console.log(req.body);
  
    const { username, topic, tip } = req.body; // Have to adjust this
  
    if (req.body) {
      const newTip = { // Have to adjust this
        username,
        tip,
        topic,
        tip_id: uuidv4(),
      };
  
      readAndAppend(newTip, './db/notes.json'); //Have to adjust this
      res.json(`Tip added successfully`);
    } else {
      res.error('Error in adding note');
    }
  });
  
  module.exports = notes;