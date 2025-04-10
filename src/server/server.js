const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

// Database configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Your MySQL username
  password: '', // Your MySQL password
  database: 'patient_data', // Your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('MySQL Connection Error:', err);
    throw err;
  }
  console.log('MySQL Connected...');
})

app.use(cors());
app.use(express.json());

// Endpoint to save patient data
app.post('/api/patient', (req, res) => {
  const data = req.body;
  const sql = 'INSERT INTO patient_medical_data SET ?';
  db.query(sql, data, (err, result) => {
    if (err) throw err;
    console.log('Data inserted:', result);
    res.send('Data inserted');
  });
});

// Endpoint to get all patient data
app.get('/api/patients', (req, res) => {
  const sql = 'SELECT * FROM patient_medical_data';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
