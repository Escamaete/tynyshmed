// Форма для сохранения рецептов
document.getElementById("prescription-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Собираем данные из формы
    const prescription = {
        patientName: document.getElementById("patientName").value,
        medication: document.getElementById("medication").value,
        dosage: document.getElementById("dosage").value,
        instructions: document.getElementById("instructions").value,
        issueDate: document.getElementById("issueDate").value
    };

    // Сохраняем рецепт в localStorage
    const prescriptions = JSON.parse(localStorage.getItem("prescriptions")) || [];
    prescriptions.push(prescription);
    localStorage.setItem("prescriptions", JSON.stringify(prescriptions));

    // Очищаем форму после сохранения
    document.getElementById("prescription-form").reset();
    alert("Рецепт сақталды!");
});

// Кнопка "Көру" для перехода на страницу с сохранёнными данными
function viewPrescriptions() {
    window.location.href = "saved-prescription.html";
}
