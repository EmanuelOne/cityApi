const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
const model = require("./model");
// console.log();
// require("./db")(function (err, db) {
//   console.log("DB connected");
// });

// app.get("/city", async (req, res) => {
//   console.log("seeding data");
//   const m = await model.insertMany(city, (err, res) => {
//     console.log("Sent " + res.insertedCount + " documents");
//   });
//   res.json(m);
// });
app.use(require("cors")());
app.get("/city", function (req, res) {
  let q = req.query.search;
  let city = [];
  if (q && q.length >= 4) {
    q = q[0].toUpperCase() + q.slice(1).toLowerCase();

    let c = require("./city.json").filter((c) => c.country_long.includes(q));
    let s = new Set();
    for (let item in c) {
      //   console.log(item);
      s.add(c[item].owm_city_name);
    }
    c = Array.from(s)
      .sort()
      .sort((a, b) => a.length - b.length);
    return res.json(c);
  }
  res.json(city);
});
app.get("/country", function (req, res) {
  const country = require("./city.json");
  let s = new Set();
  for (let item in country) {
    s.add(country[item].country_long);
  }
  res.json(Array.from(s).sort());
});
app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
    list: ["/city?search=query", "/country"],
  });
});
const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
