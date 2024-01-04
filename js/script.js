document.addEventListener('DOMContentLoaded', function () {
    var educationLink = document.getElementById('education-link');
    var educationDiv = document.getElementById('education');
  
    educationLink.addEventListener('click', function (event) {
      event.preventDefault();
      educationDiv.scrollIntoView({ behavior: 'smooth' });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    var projectsLink = document.getElementById('projects-link');
    var projectsDiv = document.getElementById('projects');
  
    projectsLink.addEventListener('click', function (event) {
      event.preventDefault();
      projectsDiv.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var timelineLink = document.getElementById('timeline-link');
    var timelineDiv = document.getElementById('timeline');
  
    timelineLink.addEventListener('click', function (event) {
      event.preventDefault();
      timelineDiv.scrollIntoView({ behavior: 'smooth' });
    });
  });
  