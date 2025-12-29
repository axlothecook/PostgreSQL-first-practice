const pool = require('./pool');

async function getAllUsernames() {
    const { rows } = await pool.query(`SELECT * FROM usernames`);
    return rows;
};

async function insertUsername(username) {
    await pool.query(`INSERT INTO usernames (username) VALUES ($1)`, [username]);
};

async function searchUsernames(word) {
    const { rows } = await pool.query(`SELECT * FROM usernames WHERE username LIKE '%${word}%'`);
    return rows;
};

async function deleteUsernames() {
    const { rows } = await pool.query('DELETE FROM usernames');
    return rows;
};

module.exports = {
    getAllUsernames,
    insertUsername,
    searchUsernames,
    deleteUsernames
};