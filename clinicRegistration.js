// Функция для сохранения данных
function saveRegistrationData() {
    const fullname = document.getElementById("fullname").value;
    const birthdate = document.getElementById("birthdate").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;

    if (!fullname || !birthdate || !address || !phone) {
        alert("Барлық өрістерді толтырыңыз!");
        return;
    }

    const registrationData = {
        fullname,
        birthdate,
        address,
        phone,
    };

    const existingData = JSON.parse(localStorage.getItem("clinicReg")) || [];
    existingData.push(registrationData);

    localStorage.setItem("clinicReg", JSON.stringify(existingData));

    alert("Деректер сәтті тіркелді!");
    document.getElementById("clinic-registration-form").reset();
}

// Функция для перехода на страницу просмотра
function viewSavedData() {
    window.location.href = "viewRegistration.html";
}
 function saveClinicRegistration(event) {
    event.preventDefault();
    const clinicName = document.getElementById('clinic-name').value;
    const clinicAddress = document.getElementById('clinic-address').value;
    saveData('Емханаға тіркелу', `Емхана: ${clinicName}, Мекенжай: ${clinicAddress}`);
    alert('Мәлімет сақталды!');
  }

