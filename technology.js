clickButton=()=>{
    const navbarElements = document.querySelector('.navbar');
    navbarElements.classList.toggle('active');
}


fetch('data.json')
.then((response) => response.json())
.then((data) => {
 
  const { technology } = data;
  const technologyImage = document.querySelector('#technologyImage');
  const navigationButtons = document.getElementById('navigationButtons');
  const technologyName = document.querySelector('#technologyName');
  const technologyDescription = document.querySelector('#technologyDescription');


  let currentIndex = 0;
  const updateContent = (index) => {
    const { images, name, description} = technology[index];

    technologyImage.innerHTML = ''; 
    const newImage = document.createElement('img');
    newImage.src = images.portrait;
    technologyImage.appendChild(newImage);

    technologyName.textContent = name;
    technologyDescription.textContent = description;
   
  };

  technology.forEach((destination, index) => {
    const button = document.createElement('button');
    button.innerHTML = ` ${index} `;
    button.classList.add('technologyIndex');
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