const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const CLICKCLICKButtons = document.querySelectorAll('.item button');

// NEXT
nextBtn.addEventListener('click', () => {
  const items = document.querySelectorAll('.item');
  slider.append(items[0]);
});

// PREV
prevBtn.addEventListener('click', () => {
  const items = document.querySelectorAll('.item');
  slider.prepend(items[items.length - 1]);
});

// Redirect to paper.html
CLICKCLICKButtons.forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = 'paper.html';
  });
});
setInterval(() => {
  const items = document.querySelectorAll('.item');
  slider.append(items[0]);
}, 4000);
function goToNextPage() {
  localStorage.setItem("playMusic", "true");
  window.location.href = "paper.html";
}


