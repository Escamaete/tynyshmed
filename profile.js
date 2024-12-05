// Загрузка данных из localStorage при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  loadProfileData();
});

// Сохранение фото профиля
function updateProfilePicture(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const photoURL = e.target.result;
      document.getElementById('profile-picture').src = photoURL;

      // Сохраняем фото в localStorage
      saveToLocalStorage("profilePhoto", photoURL);
    };
    reader.readAsDataURL(file);
  }
}

// Включение режима редактирования профиля
function editProfile() {
  document.getElementById('profile-info').style.display = 'none';
  document.getElementById('edit-profile-form').style.display = 'block';
}

// Сохранение данных профиля
function saveProfile() {
  const name = document.getElementById('edit-name').value;
  const iin = document.getElementById('edit-iin').value;
  const email = document.getElementById('edit-email').value;

  // Обновление интерфейса
  document.getElementById('profile-name').innerText = name;
  document.getElementById('profile-iin').innerText = `ИИН: ${iin}`;
  document.getElementById('profile-email').innerText = `Электрондық пошта: ${email}`;

  // Сохранение данных в localStorage
  saveToLocalStorage("profileName", name);
  saveToLocalStorage("profileIIN", iin);
  saveToLocalStorage("profileEmail", email);

  // Завершаем редактирование
  cancelEdit();
}

// Отмена режима редактирования
function cancelEdit() {
  document.getElementById('profile-info').style.display = 'block';
  document.getElementById('edit-profile-form').style.display = 'none';
}

// Функция для сохранения данных в localStorage
function saveToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

// Функция для загрузки данных из localStorage
function loadProfileData() {
  const photo = localStorage.getItem("profilePhoto");
  const name = localStorage.getItem("profileName");
  const iin = localStorage.getItem("profileIIN");
  const email = localStorage.getItem("profileEmail");

  if (photo) document.getElementById('profile-picture').src = photo;
  if (name) document.getElementById('profile-name').innerText = name;
  if (iin) document.getElementById('profile-iin').innerText = `ИИН: ${iin}`;
  if (email) document.getElementById('profile-email').innerText = `Электрондық пошта: ${email}`;
}

// Функция выхода
function logout() {
  alert("Сессия аяқталды!");
  window.location.href = "../login.html";
}
