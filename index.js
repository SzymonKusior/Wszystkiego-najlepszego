document.addEventListener("DOMContentLoaded", function() {
    const lid = document.querySelector('.lid');
    const text = document.querySelector('.text');
    const img = document.querySelector('img');
    const gift = document.querySelector('.gift');
    let confettiActive = false;

    lid.addEventListener('click', function() {
        gift.classList.add('scale');
        text.classList.add('hover');
        img.classList.remove('reverse');
        img.classList.add('hover');
        lid.classList.add('hover');
        if (!confettiActive) {
            confettiActive = true;
            const end = Date.now() + 15 * 500;
            
            (function frame() {
                if (!confettiActive) return;
                
                confetti({
                    particleCount: 2,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                });

                confetti({
                    particleCount: 2,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                } else {
                    confettiActive = false;
                }
            })();
        }
    });

    img.addEventListener('click', function() {
        gift.classList.remove('scale');
        text.classList.remove('hover');
        img.classList.remove('hover');
        img.classList.add('reverse');
        lid.classList.remove('hover');
        confettiActive = false;
        confetti()
    });
});
