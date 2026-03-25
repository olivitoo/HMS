const db = require("../config/db.js");

const getAllpatients = async (rep , res) => {
try{
    let query = "SELECT * FROM patients";
    const [rows] = await db.query(query);
    res.json(rows);
}catch(error){
    console.error("Error fetching patients:", error);
    res.status(500).json({ error: "internal server error" });


}

};

//register patient
const registerPatient = async (req, res) => {
    try {
        const { name, age, gender , ward, diagnosis } = req.body;
        let query = "INSERT INTO patients (name, age, gender, ward, diagnosis) VALUES (?, ?, ?, ?, ?)";
        const [result] = await db.query(query, [name, age, gender, ward, diagnosis]);
        res.status(201).json({ id: result.insertId, name, age, gender, ward, diagnosis });
    } catch (error) {
        console.error("Error registering patient:", error);
        res.status(500).json({ error: "internal server error" });
    }
};

// update patient details
const updatePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, gender, ward, diagnosis } = req.body;
        let query = "UPDATE patients SET name = ?, age = ?, gender = ?, ward = ?, diagnosis = ? WHERE id = ?";
        await db.query(query, [name, age, gender, ward, diagnosis, id]);
        res.json({ message: "Patient details updated successfully" });
    } catch (error) {
        console.error("Error updating patient details:", error);
        res.status(500).json({ error: "internal server error" });
        
    }

module.exports = { getAllpatients, registerPatient };