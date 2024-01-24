const express = require('express');
const routerApi = require('./routes');
const { boomErrorHandler, ormErrorHandler, errorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());
require('./utils/auth/index');
routerApi(app);

app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
