const db = require('../db/queries');

const getUsernames = async (req, res) => {
    const usernames = await db.getAllUsernames();
    console.log(usernames);
    const temp = usernames.map(user => user.username).join(', ');
    res.send('Usernames: ' + temp);
};

const createUsernameGet = async (req, res) => {
    res.render('new', {
        title: 'New User',
    });
};

const createUsernamePost = async (req, res) => {
    const { userName } = req.body;
    await db.insertUsername(userName);
    res.redirect('/');
};

const searchUsernamesGet = async (req, res) => {
    let searchWord = req.path;
    searchWord = searchWord.split("=").pop();
    const results = await db.searchUsernames(searchWord);
    const temp = results.map(user => user.username).join(', ');
    res.send('Result found: ' + temp);
};

const deleteUsernamesGet = async (req, res) => {
    const results = await db.deleteUsernames();
    res.send('All usernames have been deleted. Remaining users: ' + results);
};

module.exports = {
    getUsernames,
    createUsernameGet,
    createUsernamePost,
    searchUsernamesGet,
    deleteUsernamesGet
};