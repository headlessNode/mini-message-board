const pool = require('./pool.js');

async function getAllMessages() {
    const {rows} = await pool.query('SELECT * FROM user_messages');
    return rows;
}

async function insertMessage(username, message) {
    await pool.query('INSERT INTO user_messages (username, message) VALUES ($1, $2)', [username, message]);
}

module.exports = {
    getAllMessages,
    insertMessage
};