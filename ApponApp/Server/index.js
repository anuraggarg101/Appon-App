require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");
const bookRoutes = require("./routes/book");
const serviceRoutes = require("./routes/services");

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", bookRoutes);
app.use("/api", serviceRoutes);

app.use(function(req, res, next){
	debugger;
	let err = new Error("Not Found");
	err.status = 404;
	next(err);
});

app.use(errorHandler);

app.listen(PORT, function(){
	console.log(`Server Starting on port ${PORT}`);
});