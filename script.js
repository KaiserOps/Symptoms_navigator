function selectGender(gender) {
  const image = document.getElementById('body-image');
  const bodyContainer = document.getElementById('body-container');
  const genderSelect = document.getElementById('gender-select');

  if (gender === 'male') {
    image.src = 'https://i.postimg.cc/c4SPF0Gj/IMG-20250613-WA0005.jpg';
  } else {
    image.src = 'https://i.postimg.cc/hjBgqx78/24469993-realistic-front-muscles-of-woman-isolated-in-white-background.jpg'; // replace if needed
  }

  bodyContainer.style.display = 'block';
  genderSelect.style.display = 'none';
}

function zoneClicked(part) {
  const output = document.getElementById('output');
  output.innerHTML =
  
 ` <strong>${part} selected</strong> <br/> 
  Loading symptoms...`

  ;
}
