const port = 3333;
const app = require('./app');

app.listen(
  port
, () => console.log(`BACKEND is running on port ${port}...`)
);