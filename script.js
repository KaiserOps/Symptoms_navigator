function selectGender(gender) {
  const image = document.getElementById('body-image');
  const container = document.getElementById('body-container');

  if (gender === 'male') {
    image.src = 'https://i.postimg.cc/c4SPF0Gj/IMG-20250613-WA0005.jpg';  // male image
  } else {
    image.src = 'https://i.postimg.cc/hjBgqx78/24469993-realistic-front-muscles-of-woman-isolated-in-white-background.jpg'; //female image 
  }

  container.style.display = 'block';
}