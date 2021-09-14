const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
const city = require("./city.json");
// console.log();
// require("./db")(function (err, db) {
//   console.log("DB connected");
// });

app.get("/", function (req, res) {
  const q =
    req.query.city[0].toUpperCase() + req.query.city.slice(1).toLowerCase();
  if (q.length < 4) {
    return res.json([]);
  }
  res.json(city.filter((c) => c.owm_city_name.includes(q)));
});

app.get("/:country", (req, res) => {});
const port = 5050;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
