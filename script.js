function selectProfile(profileName) {

  if (profileName === 'profile1') {
    window.location.href = 'Max';
  } else if (profileName === 'profile2') {
    window.location.href = 'Milo';
  }
}

function addProfile() {
  // Hier könntest du eine Benutzeroberfläche (Formular oder Modal) anzeigen, um die Informationen für das neue Profil zu sammeln.
  // Angenommen, du fügst das neue Profil basierend auf einem Benutzernamen hinzu:

  var username = prompt('Gib den Benutzernamen für das neue Profil ein:');

  if (username) {
    var newProfileCard = document.createElement('div');
    newProfileCard.className = 'profile-card';

    var newProfileImage = document.createElement('img');
    newProfileImage.src = 'default-profile-image.png'; // Passe dies entsprechend an
    newProfileImage.alt = 'New Profile';

    var newProfileName = document.createElement('p');
    newProfileName.textContent = username;

    newProfileCard.appendChild(newProfileImage);
    newProfileCard.appendChild(newProfileName);

    // Füge das neue Profil zur Profilauswahl hinzu
    var profileContainer = document.querySelector('.profile-container');
    profileContainer.insertBefore(newProfileCard, profileContainer.lastElementChild);
  }
}
