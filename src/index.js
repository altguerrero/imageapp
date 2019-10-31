const express = require("express");
const config = require("./server/config");
// database
require("./database");
const app = config(express());

app.listen(app.get("port"), () =>
  console.log("server is on port", app.get("port"))
);
