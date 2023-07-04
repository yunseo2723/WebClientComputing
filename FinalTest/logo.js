window.addEventListener('wheel', function(event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }
}, { passive: false });

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.section-1 .slider');
    const slides = slider.querySelectorAll('img');
    let currentSlide = 0;
    const slideInterval = setInterval(nextSlide, 2000);
  
    function nextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }
  
    // 초기 슬라이드 활성화
    slides[currentSlide].classList.add('active');
  });
  
  // 이미지 클릭 시 홈페이지로 이동
  const imageContainers = document.querySelectorAll('.section-1 .image-container');
  
  imageContainers.forEach(container => {
    container.addEventListener('click', () => {
      const link = container.querySelector('a');
      if (link) {
        const url = link.getAttribute('href');
        window.open(url, '_blank');
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.section-3 .prev-button');
    const nextButton = document.querySelector('.section-3 .next-button');
    const imageContainers = document.querySelectorAll('.section-3 .image-container');
    let currentIndex = 0;

    prevButton.addEventListener('click', () => {
        imageContainers[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + imageContainers.length) % imageContainers.length;
        imageContainers[currentIndex].classList.add('active');
    });

    nextButton.addEventListener('click', () => {
        imageContainers[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % imageContainers.length;
        imageContainers[currentIndex].classList.add('active');
    });

    // 초기 슬라이드 활성화
    imageContainers[currentIndex].classList.add('active');
});

document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.section-5 .prev-button');
  const nextButton = document.querySelector('.section-5 .next-button');
  const imageContainers = document.querySelectorAll('.section-5 .image-container');
  let currentIndex = 0;

  prevButton.addEventListener('click', () => {
      imageContainers[currentIndex].classList.remove('active');
      currentIndex = (currentIndex - 1 + imageContainers.length) % imageContainers.length;
      imageContainers[currentIndex].classList.add('active');
  });

  nextButton.addEventListener('click', () => {
      imageContainers[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % imageContainers.length;
      imageContainers[currentIndex].classList.add('active');
  });

  // 초기 슬라이드 활성화
  imageContainers[currentIndex].classList.add('active');
});