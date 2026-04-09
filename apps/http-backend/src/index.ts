import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import {
  CreateUserSchema,
  SigninSchema,
  CreateRoomSchema,
} from "@repo/common/types";
const app = express();
const port = 3006;

app.post("/signup", (req, res) => {
  //db call
  const data = CreateUserSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "Incorrect input",
    });
    return;
  }
  res.json({
    userId: 123,
  });
});
app.post("/signin", (req, res) => {
  const data = SigninSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "Incorrect input",
    });
    return;
  }
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
  const data = CreateRoomSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "Incorrect input",
    });
    return;
  }
  res.json({
    roomId: 123,
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
