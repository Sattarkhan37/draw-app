import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
import { middleware } from "./middleware";
const app = express();
const port = 3006;

app.post("/signup", (req, res) => {
  //db call
  res.json({
    userId: 123,
  });
});
app.post("/signin", (req, res) => {
  const userId = 1;
  const tocken = jwt.sign(
    {
      userId,
    },
    JWT_SECRET,
  );
  res.json({ tocken });
});
app.post("/room", middleware, (req, res) => {
  res.json({
    roomId: 123,
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
