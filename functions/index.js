const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')("sk_test_51HOowFDKfvO7036WKIsiOlWzZgeWmlGH2CBQ5XPx6am8pxN1A5CmLaQ8GyNZ3ECQ7gVsuEWMkBDC6YKeQBVJpG0Z00ldgNFEwK");

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment request recieved for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of currency
        currency: "inr",
    });
    
    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app);