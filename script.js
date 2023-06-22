// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the "Show More" button and the portfolio list
    var showMoreButton = document.getElementById('show-more-button');
    var portfolioList = document.getElementById('portfolio-list');
  
    // Hide all portfolio items except the first six
    var portfolioItems = portfolioList.querySelectorAll('li');
    for (var i = 4; i < portfolioItems.length; i++) {
      portfolioItems[i].style.display = 'none';
    }
  
    // Add click event listener to the "Show More" button
    showMoreButton.addEventListener('click', function() {
      // Toggle the display of hidden portfolio items
      for (var i = 4; i < portfolioItems.length; i++) {
        if (portfolioItems[i].style.display === 'none') {
          portfolioItems[i].style.display = 'block';
        } else {
          portfolioItems[i].style.display = 'none';
        }
      }
  
      // Update the "Show More" button text
      if (showMoreButton.innerText === 'Show More') {
        showMoreButton.innerText = 'Show Less';
      } else {
        showMoreButton.innerText = 'Show More';
      }
    });
  });
  