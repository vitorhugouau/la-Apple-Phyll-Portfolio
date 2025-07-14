// const chk = document.getElementById('chk')

// chk.addEventListener('change', () => {
//   document.documentElement.classList.toggle('dark');
// })

const chk = document.getElementById('chk');

// Verifica o tema e o estado dos ícones ao carregar a página
const isDarkMode = localStorage.getItem('theme') === 'dark';
const isIconCharged = localStorage.getItem('iconState') === 'charged';

if (isDarkMode) {
  document.documentElement.classList.add('dark');
  chk.checked = true;
}

if (isIconCharged) {
  document.querySelectorAll('.icon').forEach((element) => {
    element.classList.add('charge');
  });
}

// Evento de mudança no checkbox
chk.addEventListener('change', () => {
  document.documentElement.classList.toggle('dark');

  // Armazena a preferência do tema no localStorage
  if (document.documentElement.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }

  // Altera a classe dos elementos com a classe 'icon' e armazena no localStorage
  var content = document.querySelectorAll('.icon');
  if (chk.checked) {
    content.forEach((element) => {
      element.classList.add('charge');
    });
    localStorage.setItem('iconState', 'charged');
  } else {
    content.forEach((element) => {
      element.classList.remove('charge');
    });
    localStorage.setItem('iconState', 'uncharged');
  }
});

// const chk = document.getElementById('chk')

// chk.addEventListener('change', () => {
//   document.body.classList.toggle('dark')
// })

console.log("Script carregado!");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM pronto");

  const targets = document.querySelectorAll('.fade-in');
  console.log("Elementos encontrados:", targets);
});

document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // some ao sair da tela
      }
    });
  }, {
    threshold: 0.1
  });

  targets.forEach(el => observer.observe(el));
});





