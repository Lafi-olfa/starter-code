clickButton=()=>{
    const navbarElements = document.querySelector('.navbar');
    navbarElements.classList.toggle('active');
}


fetch('data.json')
.then((response) => response.json())
.then((data) => {
 
  const { crew } = data;
  const crewImage = document.querySelector('#crewImage');
  const navigationButtons = document.getElementById('navigationButtons');
  const crewRole = document.querySelector('#crewRole');
  const crewName = document.querySelector('#crewName');
  const crewBio = document.querySelector('#crewBio');


  let currentIndex = 0;
  const updateContent = (index) => {
    const { images, name, role, bio} = crew[index];

    crewImage.innerHTML = ''; 
    const newImage = document.createElement('img');
    newImage.src = images.png;
    crewImage.appendChild(newImage);

    crewRole.textContent = role;
    crewName.textContent = name;
    crewBio.textContent = bio;
   
  };

  crew.forEach((destination, index) => {
    const button = document.createElement('button');
    button.innerHTML = ` <i class="fa-solid fa-circle"></i> `; // Remplacez par l'icône souhaitée
    button.addEventListener('click', () => {
        const buttons = navigationButtons.querySelectorAll('button');
        buttons.forEach(btn => btn.classList.remove('active'));

        // Ajouter la classe active au bouton cliqué
        button.classList.add('active');

    });
    navigationButtons.appendChild(button);
  });

  updateContent(currentIndex);
})
.catch((error) => {
  console.error('Erreur lors du chargement du fichier JSON:', error);
});