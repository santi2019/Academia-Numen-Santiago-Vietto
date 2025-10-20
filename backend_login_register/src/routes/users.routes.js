const express = require('express');

const UsersRouter = express.Router();

UsersRouter.get('/', (_, response) => {
    response.send("Users")
});


module.exports = UsersRouter;