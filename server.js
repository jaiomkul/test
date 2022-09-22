const app = require("./index");

const connect = require("./src/configs/db");
const port = process.env.PORT;

app.listen(port, async function () {
  await connect();
  console.log(`Listing on port ${port}`);
});

//server
