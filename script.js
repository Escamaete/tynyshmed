document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.getElementById('data-table').querySelector('tbody');

  // Функция для загрузки данных из localStorage
  function loadTableData() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    tableBody.innerHTML = '';

    if (users.length > 0) {
      users.forEach(user => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = user.iin;
        row.insertCell(1).textContent = user.password;
        row.insertCell(2).textContent = user.count;
      });
    } else {
      tableBody.innerHTML = '<tr><td colspan="3">Сақталған мәліметтер жоқ.</td></tr>';
    }
  }

  // Функция для очистки всех данных
  function clearAllData() {
    if (confirm('Барлық мәліметтерді өшіруге сенімдісіз бе?')) {
      localStorage.removeItem('users');
      loadTableData();
      alert('Барлық мәліметтер өшірілді.');
    }
  }

  // Функция для возврата на предыдущую страницу
  function goBack() {
    window.history.back();
  }

  // Делаем функции доступными в глобальной области
  window.clearAllData = clearAllData;
  window.goBack = goBack;

  // Загружаем данные при загрузке страницы
  loadTableData();
});




