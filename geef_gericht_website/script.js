const goals = {
    voedsel: [
      { name: 'Voedselbank Nederland', website: 'https://www.voedselbankennederland.nl' },
      { name: 'World Food Programme', website: 'https://www.wfp.org' },
    ],
    kanker: [
      { name: 'KWF Kankerbestrijding', website: 'https://www.kwf.nl' },
      { name: 'Tegen Kanker', website: 'https://www.tegenkanker.nl/doneren/' },
    ],
    vluchtelingen: [
      { name: 'UNHCR', website: 'https://www.unhcr.org' },
      { name: 'Stichting Vluchteling', website: 'https://www.vluchteling.nl' },
    ],
    milieu: [
      { name: 'Greenpeace Nederland', website: 'https://www.greenpeace.org/netherlands/' },
      { name: 'WWF', website: 'https://www.wwf.nl' },
    ],
    kleding: [
      { name: 'Kledingbank', website: 'https://www.kledingbankmaxima.nl/' },
    ],
  };
  
  const chooseGoalSection = document.getElementById('choose-goal');
  const chooseDonationSection = document.getElementById('choose-donation');
  const recommendationsSection = document.getElementById('recommendations');
  const orgList = document.getElementById('org-list');
  
  let selectedGoal = null;
  let selectedDonation = null;
  
  chooseGoalSection.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedGoal = btn.dataset.goal;
      chooseGoalSection.classList.add('hidden');
      chooseDonationSection.classList.remove('hidden');
    });
  });
  
  chooseDonationSection.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedDonation = btn.dataset.donation;
      chooseDonationSection.classList.add('hidden');
      showRecommendations();
    });
  });
  
  function showRecommendations() {
    recommendationsSection.classList.remove('hidden');
    orgList.innerHTML = '';
  
    const orgs = goals[selectedGoal] || [];
  
    if (orgs.length === 0) {
      orgList.innerHTML = '<p>Geen organisaties gevonden voor deze categorie.</p>';
    } else {
      orgs.forEach(org => {
        const div = document.createElement('div');
        div.className = 'org-card';
        div.innerHTML = `
          <h3>${org.name}</h3>
          <p><a href="${org.website}" target="_blank" rel="noopener">Bezoek website</a></p>
        `;
        orgList.appendChild(div);
      });
    }
  }
  