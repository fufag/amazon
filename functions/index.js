const functions = require("firebase-functions");
const express = require("express");

const cors = require("cors");

const stripe = require("stripe")
("sk_test_51NDkPXSBRgpoOKyPDvhqxjXSN9yzLvuZgJSTcz0Tgpc8Q6DxODWCsRzWyMxNBjJg4ryV1KNWP9Cz4JKBoyCaOj3w00ifH6VqBX");

//App config

const app = express();

app.use(cors({origin:true}));
app.use(express.json());


app.get("/", (request, response) => response.status(200).send("hello world"));

export.api = functions.https.onRequest(app);