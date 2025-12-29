const { Router } = require('express');
const usersRouter = Router();
const usersController = require('../controllers/usersController');

usersRouter.get('/', usersController.getUsernames);
usersRouter.get('/search={*splat}', usersController.searchUsernamesGet);
usersRouter.get('/delete', usersController.deleteUsernamesGet);

usersRouter.get('/new', usersController.createUsernameGet);
usersRouter.post('/new', usersController.createUsernamePost);

module.exports = usersRouter;