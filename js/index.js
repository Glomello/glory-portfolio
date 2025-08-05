// Simple greeting based on the time of day
const greeting = document.getElementById('greeting');

const hour = new Date().getHours();
if (hour < 12) {
  greeting.textContent = 'Good morning!';
} else if (hour < 18) {
  greeting.textContent = 'Good afternoon!';
} else {
  greeting.textContent = 'Good evening!';
}

// show more button functionality
const showMoreBtn = document.getElementById('showMoreBtn');
const moreContent = document.getElementById('moreContent');

showMoreBtn.addEventListener('click', () => {
  if (moreContent.style.display === 'none') {
    moreContent.style.display = 'block';
    showMoreBtn.textContent = 'Show Less';
  } else {
    moreContent.style.display = 'none';
    showMoreBtn.textContent = 'Show More';
  }
});

// Back to top button functionality
const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
