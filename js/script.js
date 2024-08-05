// Add custom JavaScript here

function updateNavbarBackground() {
  const navbar = document.querySelector('.navbar');
  const navbarCollapse = document.querySelector('#navbarNavDropdown');

  if (window.scrollY > 50 || navbarCollapse.classList.contains('show')) {
      navbar.classList.add('bg-dark');
      navbar.classList.add('navbar-sticky');
  } else {
      navbar.classList.remove('bg-dark');
      navbar.classList.remove('navbar-sticky');
  }
}

function userScroll() {
  window.addEventListener('scroll', updateNavbarBackground);
}

function toggleNavbar() {
  const navbarCollapse = document.querySelector('#navbarNavDropdown');

  navbarCollapse.addEventListener('shown.bs.collapse', updateNavbarBackground);
  navbarCollapse.addEventListener('hidden.bs.collapse', updateNavbarBackground);
}

document.addEventListener('DOMContentLoaded', () => {
  toggleNavbar();
  userScroll();
  updateNavbarBackground(); // Initial check
});

// change the check box bg to dark if checked
function checkBox() {
  const checkbox = document.querySelector('#checkbox1');

  if (checkbox.checked) {
    checkbox.classList.add('bg-dark');
  } else {
    checkbox.classList.remove('bg-dark');
  }
}