const express = require("express");
const db = require("./db");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ extended: false }));
app.use("/", require("./routes/routes"));
db();

app.listen(PORT, () => {
  console.log("app listening on port ", PORT);
});
