clickButton=()=>{
    const navbarElements = document.querySelector('.navbar');
    navbarElements.classList.toggle('active');
}
fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    const { destinations } = data;
    const destinationImage = document.querySelector('#destinationImage');
    const navigationButtons = document.getElementById('navigationButtons');
    const destinationDetails = document.querySelector('#destinationDetails');
    const destinationName = document.querySelector('#destinationName');
    const destinationDistance = document.querySelector('#distance');
    const destinationTravel = document.querySelector('#travel');

    let currentIndex = 0;
    const updateContent = (index) => {
      const { images, name, description, distance, travel } = destinations[index];

      destinationImage.innerHTML = ''; 
      const newImage = document.createElement('img');
      newImage.src = images.png;
      newImage.style.width = '150px';
      destinationImage.appendChild(newImage);

      
      destinationName.textContent = name;
      destinationDetails.textContent = description;
      destinationDistance.textContent = `AVG. DISTANCE ${distance}`;
      destinationTravel.textContent = `EST. TRAVEL TIME ${travel}`;
    };

    destinations.forEach((destination, index) => {
      const button = document.createElement('button');
      button.textContent = destination.name;
      button.addEventListener('click', () => {
        currentIndex = index;
        updateContent(currentIndex);
      });
      navigationButtons.appendChild(button);
    });

    updateContent(currentIndex);
  })
  .catch((error) => {
    console.error('Erreur lors du chargement du fichier JSON:', error);
  });
