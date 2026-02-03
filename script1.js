const proposal = document.getElementById("proposal");
const mainContent = document.getElementById("mainContent");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("bgMusic");

yesBtn.addEventListener("click", () => {
  proposal.style.display = "none";
  mainContent.style.display = "block";
  music.volume = 0.6;
  music.play(); },{ once: true });


noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
