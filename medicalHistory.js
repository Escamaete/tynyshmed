// Форма для сохранения истории
document.getElementById("medical-history-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Собираем данные из формы
    const medicalHistory = {
        patientName: document.getElementById("patientName").value,
        diagnosis: document.getElementById("diagnosis").value,
        treatment: document.getElementById("treatment").value,
        visitDate: document.getElementById("visitDate").value
    };

    // Сохраняем историю в localStorage
    const histories = JSON.parse(localStorage.getItem("medicalHistories")) || [];
    histories.push(medicalHistory);
    localStorage.setItem("medicalHistories", JSON.stringify(histories));

    // Показываем сообщение об успехе
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);

    // Очищаем форму
    document.getElementById("medical-history-form").reset();
});

// Переход на страницу просмотра
function viewHistory() {
    window.location.href = "savedMedicalHistory.html";
}
 function saveMedicalHistory(event) {
    event.preventDefault();
    const diagnosis = document.getElementById('diagnosis').value;
    const treatment = document.getElementById('treatment').value;
    saveData('Ауру тарихы', `Диагноз: ${diagnosis}, Емдеу: ${treatment}`);
    alert('Мәлімет сақталды!');
  }

  function savePrescription(event) {
    event.preventDefault();
    const medicine = document.getElementById('medicine').value;
    const dosage = document.getElementById('dosage').value;
    saveData('Рецепт жазу', `Дәрі: ${medicine}, Доза: ${dosage}`);
    alert('Мәлімет сақталды!');
  }
 function saveCertificate(event) {
    event.preventDefault();
    const certificateType = document.getElementById('certificate-type').value;
    const issuedDate = document.getElementById('issued-date').value;
    const recipientName = document.getElementById('recipient-name').value;
    saveData('Анықтама беру', `Түрі: ${certificateType}, Берілген күні: ${issuedDate}, Алушы: ${recipientName}`);
    alert('Мәлімет сақталды!');
  }