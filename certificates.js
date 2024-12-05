// Сохранение данных
function saveCertificateData() {
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const date = document.getElementById("date").value;

    if (!name || !type || !date) {
        alert("Барлық өрістерді толтырыңыз!");
        return;
    }

    const certificateData = { name, type, date };

    const existingData = JSON.parse(localStorage.getItem("certificates")) || [];
    existingData.push(certificateData);

    localStorage.setItem("certificates", JSON.stringify(existingData));

    alert("Деректер сәтті тіркелді!");
    document.getElementById("certificates-form").reset();
}

// Переход на страницу просмотра
function viewSavedCertificates() {
    window.location.href = "viewCertificates.html";
}

