const express = require("express");
const app = express();
const port = 3000;
const checkLoginValidation = require("./src/validations/login");

app.use(express.json());

app.post("/login", (req, res) => {
  if (!checkLoginValidation(req.body.email, req.body.password)) {
    res.status(422);
    res.end();
    return;
  }

  if (req.body.email !== "admin") {
    res.status(401);
    res.json({ error: "bad credentials" });
    res.end();
    return;
  }

  res.json({ token: "azertyuiop" });
  res.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
