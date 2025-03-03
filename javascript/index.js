document.addEventListener('DOMContentLoaded', () => {
    const waterLevel = document.querySelector('.water-level');
    const currentSpan = document.getElementById('current');
    const targetSpan = document.getElementById('target');
    const addButton = document.getElementById('add-water');
    const resetButton = document.getElementById('reset');
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const waterSound = new Audio('../assets/water-191999.mp3');
    const successSound = new Audio('../assets/success-fanfare-trumpets-6185.mp3');
    waterSound.volume = 1;
    successSound.volume = 1;
    successSound.playbackRate = 1.5;
    let current = 0;
    const target = 2000;
    const increment = 200;

    function openMenu() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    menuBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

        addButton.addEventListener('click', (e) => {
            createRipple(e);
            if (current < target) {
                waterSound.currentTime = 0; 
                waterSound.play();
                current += increment;
                if(current==target){
                    successSound.play()
                .then(() => {
                    setTimeout(() => {
                        window.location.href = '../html/congralutions.html';
                    }, 2500);
                })
                .catch(error => {
                    console.error('Ses çalma hatası:', error);
                    // Ses çalınamazsa direkt yönlendirme yap
                    window.location.href = 'congratulations.html';
                });
                }
                updateWaterLevel();
            }
        });
    function updateWaterLevel() {
        const percentage = (current / target) * 100;
        document.getElementById('current-percent').innerHTML = '%'+percentage;
        waterLevel.style.height = `${Math.min(percentage, 100)}%`;
        currentSpan.textContent = current;
    }

    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - diameter/2}px`;
        circle.style.top = `${event.clientY - button.offsetTop - diameter/2}px`;
        circle.classList.add('ripple-effect');

        button.appendChild(circle);
        setTimeout(() => circle.remove(), 600);
    }


    resetButton.addEventListener('click', (e) => {
        createRipple(e);
        current = 0;
        updateWaterLevel();
    });

        const waterContainer = document.querySelector('.water-container');
        
    setInterval(() => {
        if (current > 0) { // Sadece su varsa kabarcık oluştur
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            
            // Rastgele boyut (3-8px arası)
            const size = Math.random() * 5 + 3;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            
            // Rastgele yatay pozisyon
            const left = Math.random() * 180;
            bubble.style.left = `${left}px`;
            
            waterLevel.appendChild(bubble);
            
            // Animasyon bitince kabarcığı kaldır
            setTimeout(() => {
                bubble.remove();
            }, 4000);
        }
    }, 500);
    targetSpan.textContent = target;
    updateWaterLevel();
});
    
