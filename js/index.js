const title = document.querySelector('.title')
const text = 'hey aku ada sesuatu buat kamuu'.split('')
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}<span/>`
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'><span/>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Menghasilkan delay acak antara 0 hingga 3 detik
  element.style.animationDelay = `${randomDelay}s`;
});

window.addEventListener('DOMContentLoaded', () => {
  const audio = new Audio('./audio/hereWithMe.mp3');
  audio.volume = 0.5; // Atur volume
  audio.loop = true;  // Putar berulang
  audio.autoplay = true;
  audio.muted = false;
  
  audio.play().catch(e => {
    console.warn('Autoplay dicegah oleh browser. Klik dulu halaman untuk memulai musik.');
  });

  // Auto Unmute setelah interaksi
  window.addEventListener('click', () => {
    audio.muted = false;
    audio.play();
  });
});