const express = require('express');

const AuthRouter = express.Router();

AuthRouter.get('/', (request, response) => {
    response.send("Auth")
});


module.exports = AuthRouter;