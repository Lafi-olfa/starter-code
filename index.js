const clickButton = () => {
    const navbarElements = document.querySelector('.navbar');
    navbarElements.classList.toggle('active');
};

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const { destinations } = data; // Destructuration pour accéder aux destinations
        const destinationImage = document.querySelector('#destinationImage');
        const destinationDetails = document.querySelector('#destinationDetails');

        // Crée des fragments pour minimiser les manipulations directes du DOM
        const imageFragment = document.createDocumentFragment();
        const detailsFragment = document.createDocumentFragment();

        destinations.forEach(({ images, name, description, distance, travel }) => {
            
            // Image
            const newDestinationImage = document.createElement('img');
            newDestinationImage.src = images.png;
            imageFragment.appendChild(newDestinationImage);

            // Name
            const newDestinationName = document.createElement('h1');
            newDestinationName.textContent = name;
            detailsFragment.appendChild(newDestinationName);

            // Description
            const newDestinationDescription = document.createElement('p');
            newDestinationDescription.textContent = description;
            detailsFragment.appendChild(newDestinationDescription);

            // Crée une div pour regrouper distance et travel
            const detailContainer = document.createElement('div');
            detailContainer.style.display = 'flex';
            detailContainer.style.flexDirection = 'column';
            detailContainer.style.gap = '10px'; // Espacement optionnel

            // Distance
            const newDestinationDistance = document.createElement('p');
            newDestinationDistance.textContent = `Distance: ${distance}`;
            detailContainer.appendChild(newDestinationDistance);

            // Travel
            const newDestinationTravel = document.createElement('p');
            newDestinationTravel.textContent = `Travel time: ${travel}`;
            detailContainer.appendChild(newDestinationTravel);

            detailsFragment.appendChild(detailContainer);
        });

        destinationImage.appendChild(imageFragment);
        destinationDetails.appendChild(detailsFragment);
    })
    .catch(error => {
        console.error('Erreur lors du chargement du fichier JSON:', error);
    });
