var express = require("express");
var router = express.Router();

// Route to handle receiving the name from the client
router.post("/", function(req, res, next) {
    const { name } = req.body; // Assuming the name is sent in the request body
    console.log("Received name from client:", name);
    res.json({ message: "Name received successfully" });
});

// getPatientDataRouter.get("/:id", function(req, res, next) {
// router.get("/", function(req, res, next) {
//     const id = req.params.id;
//     const phoneNumber = "1234567890";
//     res.json({ phoneNumber });
// });


module.exports = router;


// app.get("/getPatientData/:id", async function(req, res, next) {
//     const patientId = req.params.id;

//     try {
//         console.log("Connecting to MongoDB Atlas...");
//         const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//         await client.connect();
//         console.log("Connected successfully to MongoDB Atlas");

//         const db = client.db(dbName);
//         const collection = db.collection('patients');

//         const patientData = await collection.findOne({ Identity_card: patientId });
//         if (!patientData) {
//             console.log(`Patient with ID ${patientId} not found`);
//             res.sendStatus(404); // Send 404 if patient not found
//             return;
//         }

//         console.log('Patient data retrieved successfully:', patientData);
//         res.status(200).json(patientData); // Send patient data in JSON format
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         res.sendStatus(500); // Respond with an error status
//     }
// });
