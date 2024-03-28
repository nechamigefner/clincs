const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const getPatientDataRouter = require("./routes/getPatientData");

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://ngel5313:s326039914@cluster0.tsy7mvr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = 'Clinics';
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/getPatientData", getPatientDataRouter);

app.post("/submitPatientData", async function(req, res, next) {
    console.log("Received patient data:", req.body);

    try {
        console.log("Connecting to MongoDB Atlas...");
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log("Connected successfully to MongoDB Atlas");

        const db = client.db(dbName);
        const collection = db.collection('patients');

        // Insert the patient data into the database
        const result = await collection.insertOne(req.body);
        console.log('Patient data inserted successfully:', result.insertedId);
        res.sendStatus(200); // Respond with a success status
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        res.sendStatus(500); // Respond with an error status
    }
});

app.get("/getPatientData/:id", async function(req, res, next) {
    const patientId = req.params.id;

    try {
        console.log("Connecting to MongoDB Atlas...");
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log("Connected successfully to MongoDB Atlas");

        const db = client.db(dbName);
        const collection = db.collection('patients');

        const patientData = await collection.findOne({ Identity_card: patientId });
        if (!patientData) {
            console.log(`Patient with ID ${patientId} not found`);
            res.sendStatus(404); // Send 404 if patient not found
            return;
        }

        console.log('Patient data retrieved successfully:', patientData);
        res.status(200).json(patientData); // Send patient data in JSON format
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        res.sendStatus(500); // Respond with an error status
    }
});


module.exports = app;


