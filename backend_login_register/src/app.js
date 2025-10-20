require('dotenv').config();
const app = require('./server/server')

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Servidor funcionando en el puerto ${PORT}`));

