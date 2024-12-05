// Функция для сохранения данных в файл
function saveDataToFile(data, filename) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}

// Сохранение регистрации в клинике
function saveClinicReg() {
    const clinicName = document.getElementById("clinicName").value;
    const location = document.getElementById("location").value;

    const data = { clinicName, location };
    saveDataToFile(data, "clinicReg.json");
}

// Сохранение справки
function saveCertificate() {
    const certificateType = document.getElementById("certificateType").value;
    const issueDate = document.getElementById("issueDate").value;
    const doctorNotes = document.getElementById("doctorNotes").value;

    const data = { certificateType, issueDate, doctorNotes };
    saveDataToFile(data, "certificate.json");
}

// Сохранение врача
function saveDoctor() {
    const doctorName = document.getElementById("doctorName").value;
    const specialty = document.getElementById("specialty").value;

    const data = { doctorName, specialty };
    saveDataToFile(data, "doctor.json");
}

// Сохранение истории болезни
function saveMedicalHistory() {
    const patientName = document.getElementById("patientName").value;
    const medicalHistory = document.getElementById("medicalHistory").value;

    const data = { patientName, medicalHistory };
    saveDataToFile(data, "medicalHistory.json");
}

// Сохранение рецепта
function savePrescription() {
    const medicationName = document.getElementById("medicationName").value;
    const dosage = document.getElementById("dosage").value;

    const data = { medicationName, dosage };
    saveDataToFile(data, "prescription.json");
}
