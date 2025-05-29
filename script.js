function showSection(id) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.add('hidden');
  });

  document.getElementById(id).classList.remove('hidden');
}
