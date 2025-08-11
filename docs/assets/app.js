window.addEventListener('load', () => {
  const slider = document.querySelector('.slider');
  const firstCard = document.getElementById('first-card');
  if (slider && firstCard) {
    const offset = firstCard.offsetLeft - (slider.clientWidth - firstCard.clientWidth) / 2;
    slider.scrollTo({ left: offset, behavior: 'smooth' });
  }
});

function resizeScaler() {
  const baseWidth = 375;
  const baseHeight = 667;
  const scaleX = window.innerWidth / baseWidth;
  const scaleY = window.innerHeight / baseHeight;
  const scale = Math.min(scaleX, scaleY);
  const scaler = document.getElementById('scaler');
  if (scaler) scaler.style.transform = `scale(${scale})`;
}
window.addEventListener('load', resizeScaler);
window.addEventListener('resize', resizeScaler);
