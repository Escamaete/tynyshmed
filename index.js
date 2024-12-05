document.addEventListener('DOMContentLoaded', () => {
    // Барлығын сақтау функциясы
    document.getElementById('save-all').addEventListener('click', () => {
        // Профиль деректерін жинау
        const profile = {
            iin: document.getElementById('iin').value.trim(),
            fullName: document.getElementById('fullName').value.trim(),
            address: document.getElementById('address').value.trim(),
        };

        // Басқа деректерді жинау
        const data = {
            prescriptions: document.getElementById('prescriptions-data').value.trim(),
            medicalHistory: document.getElementById('medical-history-data').value.trim(),
            doctors: document.getElementById('doctors-data').value.trim(),
            clinicReg: document.getElementById('clinic-data').value.trim(),
            certificates: document.getElementById('certificates-data').value.trim(),
        };

        // Барлығын localStorage-ға сақтау
        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('data', JSON.stringify(data));

        alert('Барлық деректер сәтті сақталды!');
    });
});
