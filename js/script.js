document.addEventListener('DOMContentLoaded', function () {
    // Get the education link and education div by their IDs
    var educationLink = document.getElementById('education-link');
    var educationDiv = document.getElementById('education');
  
    // Add a click event listener to the education link
    educationLink.addEventListener('click', function (event) {
      // Prevent the default behavior of the link (e.g., navigating to "#")
      event.preventDefault();
  
      // Scroll to the education div
      educationDiv.scrollIntoView({ behavior: 'smooth' });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    // Get the education link and education div by their IDs
    var educationLink = document.getElementById('projects-link');
    var educationDiv = document.getElementById('projects');
  
    // Add a click event listener to the education link
    educationLink.addEventListener('click', function (event) {
      // Prevent the default behavior of the link (e.g., navigating to "#")
      event.preventDefault();
  
      // Scroll to the education div
      educationDiv.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    // Get the education link and education div by their IDs
    var educationLink = document.getElementById('timeline-link');
    var educationDiv = document.getElementById('timeline');
  
    // Add a click event listener to the education link
    educationLink.addEventListener('click', function (event) {
      // Prevent the default behavior of the link (e.g., navigating to "#")
      event.preventDefault();
  
      // Scroll to the education div
      educationDiv.scrollIntoView({ behavior: 'smooth' });
    });
  });
  