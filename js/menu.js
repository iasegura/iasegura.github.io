document.querySelector('.hamburger-icon').addEventListener('click', function () {
    var menu = document.querySelector('.menu-hamburger ul');
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  });