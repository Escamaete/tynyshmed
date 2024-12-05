// Навигацияны басқару функциясы
function navigateTo(section) {
  switch (section) {
    case 'rpn':
      window.location.href = '../dashboard/rpn/rpn.html';
      break;
    case 'appointment':
      window.location.href = '../dashboard/doctor/doctor.html';
      break;
    case 'profile':
      window.location.href = '../dashboard/profile/profile.html';
      break;
    case 'clinicRegistration':
      window.location.href = '../dashboard/clinicReg/clinicRegistration.html';
      break;
    case 'medicalHistory':
      window.location.href = '../dashboard/medicalhistory/medicalHistory.html';
      break;
    case 'prescriptions':
      window.location.href = '../dashboard/prescriptions/prescriptions.html';
      break;
    case 'references':
      window.location.href = '../dashboard/certificates/certificates.html';
      break;
    default:
      alert('Белгісіз бөлім.');
  }
}

// Аудармалар
const translations = {
  kk: {
    exitButton: "Шығу",
    profileButton: "Профиль",
    settingsButton: "Параметрлер",
    appointmentButton: "Дәрігерге жазылу",
    rpnButton: "РПН",
    clinicRegButton: "Емханаға тіркелу",
    medicalHistoryButton: "Ауру тарихы толтыру",
    prescriptionsButton: "Рецепт жазу",
    certificatesButton: "Анықтама беру",
  },
  ru: {
    exitButton: "Выход",
    profileButton: "Профиль",
    settingsButton: "Настройки",
    appointmentButton: "Запись к врачу",
    rpnButton: "РПН",
    clinicRegButton: "Регистрация в поликлинике",
    medicalHistoryButton: "Заполнение истории болезни",
    prescriptionsButton: "Выписать рецепт",
    certificatesButton: "Выдать справку",
  },
  en: {
    exitButton: "Exit",
    profileButton: "Profile",
    settingsButton: "Settings",
    appointmentButton: "Make an Appointment",
    rpnButton: "RPN",
    clinicRegButton: "Register in Clinic",
    medicalHistoryButton: "Fill Medical History",
    prescriptionsButton: "Write Prescription",
    certificatesButton: "Issue Certificate",
  },
};

// Тілді қолдану функциясы
function applyLanguage(language) {
  const langData = translations[language];
  document.getElementById("exit-button").textContent = langData.exitButton;
  document.getElementById("profile-button").textContent = langData.profileButton;
  document.getElementById("settings-button").textContent = langData.settingsButton;
  document.getElementById("appointment-button").textContent = langData.appointmentButton;
  document.getElementById("rpn-button").textContent = langData.rpnButton;
  document.getElementById("clinic-reg-button").textContent = langData.clinicRegButton;
  document.getElementById("medical-history-button").textContent = langData.medicalHistoryButton;
  document.getElementById("prescriptions-button").textContent = langData.prescriptionsButton;
  document.getElementById("certificates-button").textContent = langData.certificatesButton;
}

// Бетті жүктегенде сақталған тілді қолдану
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language") || "kk"; // Сақталған тілді оқу
  applyLanguage(savedLanguage); // Тілді қолдану
});
// Мәліметтерді сақтау
function saveData(iin, name, category, data) {
  const existingData = JSON.parse(localStorage.getItem('generalData')) || [];
  existingData.push({ iin, name, category, data });
  localStorage.setItem('generalData', JSON.stringify(existingData));
}
