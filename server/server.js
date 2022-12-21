const express = require("express");
const app = express();
const cors = require("cors");

app.listen(5001, () => {
  console.log("listening on server 5001");
});

app.use("/", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "public/index.html");
});

const db = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "jonah",
    password: "1234",
    database: "finalproject",
    port: 5432,
  },
});

app.get("/api/flavours", (req, res) => {
  db.select("*")
    .from("flavours")
    .then((data) => {
      res.json(data);
    });
});
