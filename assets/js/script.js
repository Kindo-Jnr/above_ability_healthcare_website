//  Navbar Section----------

     // Sticky Navbar--------
     document.addEventListener("DOMContentLoaded", function() {
      const header = document.querySelector('header');
      window.addEventListener("scroll", function() {
          header.classList.toggle("sticky", window.scrollY > 5);
      });
  });


// Toggle Icon Navbar------
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
   menuIcon.classList.toggle("bx-x");
   navlist.classList.toggle("open"); 
}


// Close the menu when a nav link is clicked
navlist.querySelectorAll("a").forEach(link => {
   link.onclick = () => {
       menuIcon.classList.remove("bx-x");
       navlist.classList.remove("open");
   };
});

// Hero Section Slider
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const indicators = document.querySelectorAll('.indicator');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    
    // Initialize slider
    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
        
        // Update slide active class
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }
    
    // Previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlider();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Indicator click
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });
    
    // Auto-advance (optional)
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    track.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    track.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });
    
    // Initialize
    updateSlider();
});
function updateSlider() {
    // Smooth track movement
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Handle animations
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            // Activate new slide
            slide.classList.add('active');
            
            // Force reflow to restart animations
            void slide.offsetWidth;
            
            // Add visible class to trigger animations
            slide.classList.add('visible');
        } else {
            // Deactivate other slides
            slide.classList.remove('active', 'visible');
        }
    });
    
    // Update indicators
    indicators.forEach((indicator, idx) => {
        indicator.classList.toggle('active', idx === currentIndex);
    });
}

 // Back to top button
 const backToTopBtn = document.querySelector('.back-to-top');
 if (backToTopBtn) {
     window.addEventListener('scroll', function() {
         backToTopBtn.classList.toggle('active', window.pageYOffset > 300);
     });
     
     backToTopBtn.addEventListener('click', function(e) {
         e.preventDefault();
         window.scrollTo({
             top: 0,
             behavior: 'smooth'
         });
     });
 }
 