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
app.get("/", function (req, res) {
  const q =
    req.query.city[0].toUpperCase() + req.query.city.slice(1).toLowerCase();
  if (q.length < 4) {
    return res.json([]);
  } else res.json(require("./city.json").filter((c) => c.owm_city_name.includes(q)));
});

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
