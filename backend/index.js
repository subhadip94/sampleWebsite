const express = require("express");
var cors = require('cors')
const app = express();
const port = 3001;

const { getRoute, postRoute } = require('./controller')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())

app.get("/", getRoute);

app.post("/post", postRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
