const PORT = 8000;
const express = require('express');
const { MongoClient } = require('mongodb')
const uri = 'mongodb+srv://ghostfinal:mypassword@cluster0.10xy27n.mongodb.net/Cluster0?retryWrites=true&w=majority'
const { v4: uuidv4 } = require('uuid')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bcrypt = require('bcrypt')
// const { application } = require('express')
// require('dotenv').config()

const app = express();

app.use(cors());

app.use(express.json())

app.get('/', (req, res) => {
  res.json('Hello to my app')
});

app.post('/signup', async (req, res) => {
  const client = new MongoClient(uri)
  const { email, password } = req.body

  const generatedUserId = uuidv4()
  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    await client.connect()
    const database = client.db('ghost-tindr')
    const users = database.collection('users')

    const sanitizedEmail = email.toLowerCase()

    const data = {
      user_id: generatedUserId,
      email: sanitizedEmail,
      hashed_password: hashedPassword
    }
    const insertedUser = await users.insertOne(data)

    const token = jwt.sign(insertedUser, sanitizedEmail, {
      expiresIn: 1200 * 24,
    })
    res.status(201).json({ token, userId: generatedUserId, email: sanitizedEmail })
  } catch (err) {
    console.log(err)
  }
});


app.post('/login', async (req, res) => {
  const client = new MongoClient(uri)
  const { email, password } = req.body

  try {
    await client.connect()
    const database = client.db('ghost-tindr')
    const users = database.collection('users')

    const user = await users.findOne({ email })
    console.log('email:', email, 'users:', users, 'user:', user)
    const correctPassword = await bcrypt.compare(password, user.hashed_password)

    if (user && correctPassword) {
      const token = jwt.sign(user, email, {
        expiresIn: "120d"
      })
      res.json({ token, userId: user.user_id, email })
    }

  } catch(err) {
    console.log(err)
  }
});



app.get('/users', async (req, res) => {
  const client = new MongoClient(uri)

  try {
    await client.connect()
    const database = client.db('ghost-tindr')
    const users = database.collection('users')

    const returnedUsers = await users.find().toArray()
    res.send(returnedUsers)
  } finally {
    await client.close()
  }
});

app.listen(PORT, () => console.log('server running on PORT ' + PORT));