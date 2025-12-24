document.addEventListener('DOMContentLoaded', function() {
    
    // 1. FITUR SAPAAN OTOMATIS BERDASARKAN WAKTU
    const greetingElement = document.getElementById('greeting');
    const hour = new Date().getHours();
    let text = "";

    if (hour < 12) {
        text = "Selamat Pagi, Kak! ☀️";
    } else if (hour < 18) {
        text = "Selamat Siang, Kak! 🌤️";
    } else {
        text = "Selamat Malam, Kak! 🌙";
    }
    
    greetingElement.innerText = text;

    // 2. ANIMASI TOMBOL MUNCUL SATU PER SATU
    const buttons = document.querySelectorAll('.link-btn');
    
    buttons.forEach((button, index) => {
        setTimeout(() => {
            button.classList.add('visible');
        }, index * 150); // Delay 150ms setiap tombol (efek berurutan)
    });
});