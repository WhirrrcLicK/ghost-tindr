const PORT = 8000;
const express = require("express");
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://ghostfinal:mypassword@cluster0.10xy27n.mongodb.net/Cluster0?retryWrites=true&w=majority";
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bcrypt = require("bcryptjs");
// const { application } = require('express')
// require('dotenv').config()

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello to my app");
});

app.post("/signup", async (req, res) => {
  const client = new MongoClient(uri);
  const { email, password } = req.body;

  const generatedUserId = uuidv4();
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await client.connect();
    const database = client.db("ghost-tindr");
    const users = database.collection("users");

    const sanitizedEmail = email.toLowerCase();

    const data = {
      user_id: generatedUserId,
      email: sanitizedEmail,
      hashed_password: hashedPassword,
    };
    const insertedUser = await users.insertOne(data);

    const token = jwt.sign(insertedUser, sanitizedEmail, {
      expiresIn: 1200 * 24,
    });
    res.status(201).json({ token, userId: generatedUserId });
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  const client = new MongoClient(uri);
  const { email, password } = req.body;

  try {
    await client.connect();
    const database = client.db("ghost-tindr");
    const users = database.collection("users");

    const user = await users.findOne({ email });
    // const correctPassword = await bcrypt.compare(
    //   password,
    //   user.hashed_password
    // );
    const correctPassword = password;

    if (user && correctPassword) {
      const token = jwt.sign(user, email, {
        expiresIn: "120d",
      });
      res.status(201).json({ token, userId: user.user_id });
    }
  } catch (err) {
    console.log(err);
  }
});

// Get individual user
app.get("/user", async (req, res) => {
  const client = new MongoClient(uri);
  const userId = req.query.userId;
  try {
    await client.connect();
    const database = client.db("ghost-tindr");
    const users = database.collection("users");
    // const query = { user_id: userId };
    // const user = await users.findOne(query);
    const userArr = await users.find().toArray();
    const user = userArr.find((user) => user.user_id == userId);
    res.send(user);
  } finally {
    await client.close();
  }
});

app.get("/users", async (req, res) => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("ghost-tindr");
    const users = database.collection("users");

    const returnedUsers = await users.find().toArray();
    res.send(returnedUsers);
  } finally {
    await client.close();
  }
});

app.put("/user", async (req, res) => {
  const client = new MongoClient(uri);
  const formData = req.body.formData;

  try {
    await client.connect();
    const database = client.db("ghost-tindr");
    const users = database.collection("users");

    const query = { user_id: formData.user_id };
    const updateInfo = {
      $set: {
        name: formData.name,
        age: formData.age,
        location: formData.location,
        type: formData.type,
        bio_description: formData.bio_description,
        interested_in: formData.interested_in,
        url1: formData.url1,
        url2: formData.url2,
        url3: formData.url3,
        matches: formData.matches,
      },
    };
    const insertedUser = await users.updateOne(query, updateInfo);
    res.send(insertedUser);
  } finally {
    await client.close();
  }
});

app.put("/addmatch", async (req, res) => {
  const client = new MongoClient(uri);
  const { userId, matchedUserId } = req.body;

  try {
    await client.connect();
    const database = client.db("ghost-tindr");
    const users = database.collection("users");

    const query = { user_id: userId };
    const updateInfo = {
      $push: { matches: { user_id: matchedUserId } },
    };
    const user = await users.updateOne(query, updateInfo);
    res.send(user);
  } finally {
    await client.close();
  }
});

// Get all Users by userIds in the Database
app.get("/users", async (req, res) => {
  const client = new MongoClient(uri);
  const userIds = JSON.parse(req.query.userIds);
  try {
    await client.connect();
    const database = client.db("ghost-tindr");
    const users = database.collection("users");

    const allMatched = [
      {
        $match: {
          user_id: {
            $in: userIds,
          },
        },
      },
    ];

    const foundUsers = await users.aggregate(allMatched).toArray();

    res.json(foundUsers);
  } finally {
    await client.close();
  }
});

app.listen(PORT, () => console.log("server running on PORT " + PORT));
