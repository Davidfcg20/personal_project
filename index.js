const express = require('express');
const routerApi = require('./routes');
const { boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());
routerApi(app);

app.use(boomErrorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
