const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "stripe secret key LOLLLLLLLLLLLLLLLLLLLLLLLLLL got you !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async(req, res) => {
    const total = req.query.total;

    console.log("Total", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK - Created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//Listen to tell the app on which port iot should runa
//http://localhost:5001/e-clone-d0002/us-central1/api
exports.api = functions.https.onRequest(app);