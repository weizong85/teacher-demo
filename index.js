const app = require('./server/server');
const port = process.env.PORT || 3000;
// Start listening
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
