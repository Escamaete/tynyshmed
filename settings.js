// Батырма астындағы контентті көрсету/жасыру
function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.style.display = section.style.display === "block" ? "none" : "block";
}

// Тек беттегі элементтердің бастапқы күйін жүктеу
document.addEventListener("DOMContentLoaded", () => {
  console.log("Settings page loaded.");
});

