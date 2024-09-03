const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors= require("cors")
const Patient= require("./models/Patient")
const Hospital= require("./models/Hospital")



app.use (express.json())
app.use(cors())

main().then(()=>{
    console.log("connected to mongoDB")
}).catch((err)=>{
    console.log(err)
})



async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/SIH")
}


app.post('/signup', async (req, res) => {
    try {
        const { name, phoneNumber, age, password } = req.body;

        // Create a new patient instance
        const newPatient = new Patient({ name, phoneNumber, age, password });

        // Save the patient to the database
        await newPatient.save();

        res.status(201).send('User signed up successfully');
    } catch (error) {
        res.status(500).send('Error signing up user: ' + error.message);
    }
});

app.post('/login', async (req, res) => {
    
    try {
        const { phoneNumber, password } = req.body;

        // Find the patient by phoneNumber
        const patient = await Patient.findOne({ phoneNumber });

        if (!patient) {
            return res.status(401).send('Invalid phone number or password');
        }

        // Compare the provided password with the hashed password
        const isMatch = await patient.comparePassword(password);

        if (!isMatch) {
            return res.status(401).send('Invalid phone number or password');
        }

        // Respond with a success message or token
        res.status(200).send('Login successful');
    } catch (error) {
        res.status(500).send('Error logging in user: ' + error.message);
    }
});

app.post('/signup-hospital', async (req, res) => {
    try {
        const { name, phoneNumber, password } = req.body;

        // Create a new hospital instance
        const newHospital = new Hospital({ name, phoneNumber, password });

        // Save the hospital to the database
        await newHospital.save();

        res.status(201).send('Hospital signed up successfully');
    } catch (error) {
        res.status(500).send('Error signing up hospital: ' + error.message);
    }
});

app.post('/login-hospital', async (req, res) => {
    try {
        const { phoneNumber, password } = req.body;

        // Find the hospital by phoneNumber
        const hospital = await Hospital.findOne({ phoneNumber });

        if (!hospital) {
            return res.status(401).send('Invalid phone number or password');
        }

        // Compare the provided password with the hashed password
        const isMatch = await hospital.comparePassword(password);

        if (!isMatch) {
            return res.status(401).send('Invalid phone number or password');
        }

        // Respond with a success message or token
        res.status(200).send('Login successful');
    } catch (error) {
        res.status(500).send('Error logging in hospital: ' + error.message);
    }
});



app.get("/", (req,res)=>{
   res.send("i am root")
})


app.listen(8080,()=>{
    console.log("server is listening on port 8080")
})