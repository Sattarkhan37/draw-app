import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import {
  CreateUserSchema,
  SigninSchema,
  CreateRoomSchema,
} from "@repo/common/types";
import { prismaClient } from "@repo/db/client";
const app = express();
const port = 3006;
app.use(express.json());

app.post("/signup", async (req, res) => {
  //db call
  const parsedData = CreateUserSchema.safeParse(req.body);
  if (!parsedData.success) {
    console.log(parsedData.error);

    res.json({
      message: "Incorrect input",
    });
    return;
  }
  try {
    const user = await prismaClient.user.create({
      data: {
        email: parsedData.data?.username,
        password: parsedData.data.password,
        name: parsedData.data.name,
      },
    });
    res.json({
      userId: user.id,
    });
  } catch (e) {
    res.status(411).json({
      message: "User already exists with this username",
    });
  }
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
