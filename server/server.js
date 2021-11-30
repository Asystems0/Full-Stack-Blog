const express = require("express");
const app = express();
const cors = require("cors");

const connectDB = require("./db/connect");
const Posts = require("./routes/Posts");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//Import Routes

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/posts", Posts);

app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server up and running in: http://localhost:${PORT}`)
    );
    await connectDB();
  } catch (error) {
    console.log(error);
  }
};

start();
