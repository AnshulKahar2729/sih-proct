const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Exam = require("./models/Exam");
const User = require("./models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const PORT = process.env.PORT || 4000;
const SECRET = process.env.SECRET;

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

mongoose
  .connect(
    "mongodb+srv://anshulkahar2211:ProctorDevdynamos@cluster0.xey7hwj.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

app.get("/api/test", (req, res) => {
  res.send("Hello World");
});

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Invalid token" });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

app.post("/api/register", async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    // check if user already exists
    const alreadyExist = await User.findOne({ $or: [{ email }, { username }] });
    if (!alreadyExist) {
      const user = await User.create({
        username,
        email,
        password,
        role,
      });

      const token = jwt.sign({ userId: user._id, email, role }, SECRET);
      console.log(token);

      res.status(201).json({ userId: user._id, token });
    } else {
      res.status(400).json({ message: "User already exists" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

app.get("/api/login", async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const userDoc = await User.findOne({ email, password, role });
    if (userDoc) {
      const token = jwt.sign({ userId: userDoc._id, email, role }, SECRET);
      res.status(200).json({ userId: userDoc._id, token });
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

app.get("/api/exams", authenticateJWT, async (req, res) => {
  try {
    const exams = await Exam.find({});
    res.status(200).json(exams);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

app.get("/api/exam/:id" /* , authenticateJWT */, async (req, res) => {
  const { id } = req.params;
  try {
    const exam = await Exam.findById(id);
    res.status(200).json(exam);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

app.post("/api/addExam", authenticateJWT, async (req, res) => {
  const { data } = req.body;
  console.log(data);
  try {
    const examDoc = await Exam.create({
      examName: "JEE ADVANCED",
      examDate: "2021-07-03",
      examDuration: 180,
      questions: data,
    });
    res.status(201).json(examDoc._id);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
