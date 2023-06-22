// JavaScript code for testimonials UI enhancements
window.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
  
    testimonials.forEach(function(testimonial) {
      testimonial.addEventListener('mouseenter', function() {
        this.classList.add('highlight');
      });
  
      testimonial.addEventListener('mouseleave', function() {
        this.classList.remove('highlight');
      });
    });
  });
  