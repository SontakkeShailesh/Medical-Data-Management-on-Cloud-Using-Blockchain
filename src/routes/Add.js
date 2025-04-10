import React, { useRef, useEffect } from 'react';
import AddData from './AddData';
import AddMedicalData from './AddMedicalData';
import style from './AddData.module.css';
import { Card, Button } from '@material-ui/core';
import jsPDF from 'jspdf';
import axios from 'axios'; // Import Axios

export default function Add(props) {
  const cardRef = useRef();
  const {
    patientBio,
    setPatientBio,
    addUpdatePatientBio,
    patientMedicalData,
    setPatientMedicalData,
    addUpdatePatientMedicalData,
  } = props;

  useEffect(() => {
    if (cardRef.current.scrollLeft > 0) window.addEventListener('resize', correctPosition);
    return () => {
      window.removeEventListener('resize', correctPosition);
    };
  }, []);

  const correctPosition = () => {
    cardRef.current.scrollTo(cardRef.current.scrollWidth / 2, 0);
  };

  const next = () => {
    cardRef.current.scrollBy(1000000, 0);
  };

  const handleBack = () => {
    console.log(cardRef.current.scrollWidth);
    cardRef.current.scrollTo(0, 0);
  };

  const generateInvoicePDF = () => {
    // Generate PDF logic here
  };

  const savePatientData = async () => {
    try {
      // Send patient data to the server endpoint
      await axios.post('http://localhost:5000/api/patient', {
        patient_id: patientBio.id,
        name: patientBio.name,
        birth_date: patientBio.birthDate,
        phone_number: patientBio.phoneNumber,
        address: patientBio._address,
        weight: patientMedicalData.weight,
        height: patientMedicalData.height,
        blood_group: patientMedicalData.bloodGroup,
        disease_name: patientMedicalData.diseaseName,
        disease_description: patientMedicalData.diseaseDescription,
        disease_started: patientMedicalData.diseaseStartedOn,
      });

      // Send patient data to Google Sheets
      const formData = new FormData();
      formData.append('patient_id', patientBio.id);
      formData.append('name', patientBio.name);
      formData.append('birth_date', patientBio.birthDate);
      formData.append('phone_number', patientBio.phoneNumber);
      formData.append('address', patientBio._address);
      formData.append('weight', patientMedicalData.weight);
      formData.append('height', patientMedicalData.height);
      formData.append('blood_group', patientMedicalData.bloodGroup);
      formData.append('disease_name', patientMedicalData.diseaseName);
      formData.append('disease_description', patientMedicalData.diseaseDescription);
      formData.append('disease_started', patientMedicalData.diseaseStartedOn);

      await fetch('https://script.google.com/macros/s/AKfycbz7ebYoGTtSJJ0PiscXhATDlkHKcly15lvZaqNNM8-eWG_vDDCfUWH0fRjS-V8R36mSrg/exec', {
        method: 'POST',
        body: formData,
      });

      console.log('Patient data saved');
    } catch (error) {
      console.error('Error saving patient data:', error);
    }
  };

  return (
    <div>
      <Card className={style.cardsContainer} ref={cardRef}>
        <AddData
          patientBio={patientBio}
          setPatientBio={(obj) => setPatientBio(obj)}
          addUpdatePatientBio={addUpdatePatientBio}
          next={next}
        />
        <AddMedicalData
          patientMedicalData={patientMedicalData}
          setPatientMedicalData={(obj) => setPatientMedicalData(obj)}
          addUpdatePatientMedicalData={addUpdatePatientMedicalData}
          handleBack={handleBack}
        />
      </Card>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button variant="contained" color="primary" onClick={generateInvoicePDF}>
          Generate Invoice PDF
        </Button>
        <Button variant="contained" color="secondary" onClick={savePatientData}>
          Save Patient Data
        </Button>
      </div>
    </div>
  );
}
