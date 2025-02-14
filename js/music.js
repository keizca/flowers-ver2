function setupMusic() {
    const music = document.getElementById('backgroundMusic');
  
    // Ambil status dari localStorage
    const isMusicPlaying = localStorage.getItem('musicPlaying') === 'true';
    const musicCurrentTime = localStorage.getItem('musicCurrentTime') || 0;
  
    // Mulai dari posisi terakhir
    music.currentTime = parseFloat(musicCurrentTime);
  
    // Jika sebelumnya main, lanjutkan
    if (isMusicPlaying) {
      music.play().catch((e) => console.warn('Autoplay dicegah:', e));
    }
  
    // Simpan status saat main
    music.addEventListener('play', () => {
      localStorage.setItem('musicPlaying', 'true');
    });
  
    // Simpan status saat pause
    music.addEventListener('pause', () => {
      localStorage.setItem('musicPlaying', 'false');
    });
  
    // Simpan waktu setiap detik
    setInterval(() => {
      localStorage.setItem('musicCurrentTime', music.currentTime);
    }, 1000);
  
    // Setelah halaman selesai dimuat, unmute dan atur volume
    setTimeout(() => {
      music.muted = false;
      music.volume = 0.5;
    }, 100);
  }
  
  // Jalankan saat halaman selesai dimuat
  window.addEventListener('DOMContentLoaded', setupMusic);
  
  