const style1 = document.getElementById('style1');
const style2 = document.getElementById('style2');

function toggleStyle() {
  if (!style2.disabled) {
    style1.disabled = false;
    style2.disabled = true;
    sessionStorage.setItem('theme', 'style1');
  } else {
    style1.disabled = true;
    style2.disabled = false;
    sessionStorage.setItem('theme', 'style2');
  }
}

function applySavedTheme() {
  const savedTheme = sessionStorage.getItem('theme');

  if (savedTheme === 'style2') {
    style1.disabled = true;
    style2.disabled = false;
  } else {
    style1.disabled = false;
    style2.disabled = true;
  }
}

document.addEventListener('DOMContentLoaded', applySavedTheme);