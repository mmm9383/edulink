document.addEventListener('DOMContentLoaded', function() {
  lucide.createIcons();

  const searchInput = document.querySelector('.search-input');
  const courseCards = document.querySelectorAll('.course-card');

  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const searchTerm = e.target.value.trim().toLowerCase();
      
      courseCards.forEach(function(card) {
        const courseCode = card.querySelector('.course-code');
        const courseTitle = card.querySelector('.course-title');
        
        if (courseCode && courseTitle) {
          const codeText = courseCode.textContent.toLowerCase();
          const titleText = courseTitle.textContent.toLowerCase();
          
          if (codeText.includes(searchTerm) || titleText.includes(searchTerm) || searchTerm === '') {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  }

  courseCards.forEach(function(card) {
    card.addEventListener('click', function() {
      const courseCode = card.querySelector('.course-code').textContent;
      const courseTitle = card.querySelector('.course-title').textContent;
      console.log('Selected course:', courseCode, '-', courseTitle);
    });
  });
});
