let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const captions = document.querySelectorAll('.caption'); // 获取所有描述
    const totalSlides = slides.length;

    document.getElementById('nextBtn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    function updateSlider() {
        const slidesContainer = document.querySelector('.slides');
        const offset = -currentIndex * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;

        // 更新描述文本
        captions.forEach((caption, index) => {
            caption.style.display = index === currentIndex ? 'block' : 'none';
        });
    }

    // 初始化时隐藏除当前以外的描述
    updateSlider();