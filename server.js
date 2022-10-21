const express = require('express');
const { getAbsoluteAdminUrl } = require('strapi-utils/lib');
const app = express();
 
const dataTest = {
    "full_name": "Nhã nè",
    "email": "nha@gmail.com"
}

app.get('/', (req, res) => {
  res
    .status(200)
    .json(dataTest)
    .end();
});
 
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});