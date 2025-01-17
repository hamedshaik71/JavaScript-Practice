const appContainer = document.getElementById('app');
const generateBtn = document.getElementById('generateBtn');  // This should work if placed correctly

function CreateProfileCard() {
    const profileCard = document.createElement('div');
    profileCard.className = "profile-card";
    
    const profileImg = document.createElement('img');
    profileImg.src = 'https://plus.unsplash.com/premium_photo-1665329006985-04f95dd59402?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Corrected URL typo

    const profileName = document.createElement('h3');
    profileName.textContent = "John Doe";

    const profileDescription = document.createElement('p');
    profileDescription.textContent = "A passionate web developer with experience in JavaScript and React";

    profileCard.appendChild(profileImg);
    profileCard.appendChild(profileName);
    profileCard.appendChild(profileDescription);
    appContainer.appendChild(profileCard);
}

generateBtn.addEventListener('click', CreateProfileCard);
