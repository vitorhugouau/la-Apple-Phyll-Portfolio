// const chk = document.getElementById('chk');

// const isDarkMode = localStorage.getItem('theme') === 'dark';
// const isIconCharged = localStorage.getItem('iconState') === 'charged';

// if (isDarkMode) {
//   document.documentElement.classList.add('dark');
//   chk.checked = true;
// }

// if (isIconCharged) {
//   document.querySelectorAll('.icon').forEach((element) => {
//     element.classList.add('charge');
//   });
// }

// chk.addEventListener('change', () => {
//   document.documentElement.classList.toggle('dark');

//   if (document.documentElement.classList.contains('dark')) {
//     localStorage.setItem('theme', 'dark');
//   } else {
//     localStorage.setItem('theme', 'light');
//   }

//   var content = document.querySelectorAll('.icon');
//   if (chk.checked) {
//     content.forEach((element) => {
//       element.classList.add('charge');
//     });
//     localStorage.setItem('iconState', 'charged');
//   } else {
//     content.forEach((element) => {
//       element.classList.remove('charge');
//     });
//     localStorage.setItem('iconState', 'uncharged');
//   }
// });

// ------------------------------------------------------------------------------------------------------

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
        entry.target.classList.remove('visible'); 
      }
    });
  }, {
    threshold: 0.1
  });

  targets.forEach(el => observer.observe(el));
});





