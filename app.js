const express = require("express");
const app = express();
var path = require("path");
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname + "/garden-scene.html"))
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
