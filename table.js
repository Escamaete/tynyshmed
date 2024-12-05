document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#data-table tbody');

    // Профиль деректерін жүктеу
    const profile = JSON.parse(localStorage.getItem('profile')) || {
        iin: 'Енгізілмеген',
        fullName: 'Енгізілмеген',
        address: 'Енгізілмеген',
    };

    // Басқа деректерді жүктеу
    const data = JSON.parse(localStorage.getItem('data')) || {
        prescriptions: 'Жоқ',
        medicalHistory: 'Жоқ',
        doctors: 'Жоқ',
        clinicReg: 'Жоқ',
        certificates: 'Жоқ',
    };

    // Кестеге деректерді қосу
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${profile.iin}</td>
        <td>${profile.fullName}</td>
        <td>${profile.address}</td>
        <td>${data.prescriptions}</td>
        <td>${data.medicalHistory}</td>
        <td>${data.doctors}</td>
        <td>${data.clinicReg}</td>
        <td>${data.certificates}</td>
    `;
    tableBody.appendChild(row);
});
