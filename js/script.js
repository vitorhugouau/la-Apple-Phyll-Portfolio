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




