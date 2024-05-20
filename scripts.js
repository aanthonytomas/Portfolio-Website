document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const button = document.getElementById('toggle-button');
    const themeToggle = document.getElementById('theme-toggle');
  
    themeToggle.addEventListener('change', function() {
      if (this.checked) {
        body.classList.replace('light-mode', 'dark-mode');
        button.textContent = '🌙';
      } else {
        body.classList.replace('dark-mode', 'light-mode');
        button.textContent = '☀️';
      }
    });
  });
  