const mogoose = require("mogoose");
const { database } = require("./keys");

mogoose.connect(database.URI, {
  useNewUrlParser: true
});
