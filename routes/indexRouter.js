const {Router} = require('express');
const db = require('../db/query.js');
const indexRouter = Router();

async function showAllMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render('index', {messages: messages})
}

async function addMessage(req, res) {
    await db.insertMessage(req.body.author, req.body.message);
    res.redirect('/');
}

indexRouter.get("/", showAllMessages);

indexRouter.post('/new', addMessage);

module.exports = indexRouter;