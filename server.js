const express = require("express");
const cors = require("cors");

// const categoryRouter = require("./routers/category");
const articleRouter = require("./routers/article");

const PORT = 4000;
const app = express();

app.use(express.json());
app.use(cors());

// app.use("/categories", categoryRouter);
app.use("/articles", articleRouter);

app.listen(PORT, () => console.log(`Server newNews running on port :${PORT}`));
