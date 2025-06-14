// Basic Scroll Smooth
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  #contact a {
    color: #0077b6;
    text-decoration: none;
    font-weight: bold;
  }
  
  #contact a:hover {
    text-decoration: underline;
  }