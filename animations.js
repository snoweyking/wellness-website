document.addEventListener('DOMContentLoaded', function() {
  var scrollTrigger = 400; 
  var heroSection = document.getElementById('hero');
  var mainText = heroSection.querySelector('h1');

  mainText.style.opacity = '0';
  mainText.style.transform = 'translateY(50px)';

  var checkVisibility = function() {
    var rect = heroSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 100) {
      mainText.style.opacity = '1';
      mainText.style.transform = 'translateY(0)';
    }
  };

  checkVisibility(); 

  window.addEventListener('scroll', checkVisibility);
});
