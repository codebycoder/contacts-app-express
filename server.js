const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
const contactRouter = require("./routes/contactRoutes");

app.use("/api/contacts", contactRouter);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
