function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile-photo');
    if (photo) {
        photo.src = profileData.photo;
        photo.alt = profileData.name;
    }

    const name = document.getElementById('profile-name');
    if (name) name.innerText = profileData.name;

    const job = document.getElementById('profile-job');
    if (job) job.innerText = profileData.job;

    const location = document.getElementById('profile-location');
    if (location) location.innerText = profileData.location;

    const phone = document.getElementById('profile-phone');
    if (phone) {
        phone.innerText = profileData.phone;
        phone.href = `tel:${profileData.phone}`;
    }

    const email = document.getElementById('profile-email');
    if (email) {
        email.innerText = profileData.email;
        email.href = `mailto:${profileData.email}`;
    }
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile-skills-softSkills');
    if (softSkills) {
        softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
    }
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile-skills-hardSkills');
    if (hardSkills) {
        hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('');
    }
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile-languages');
    if (languages) {
        languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');
    }
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile-portfolio');
    if (portfolio) {
        portfolio.innerHTML = profileData.portfolio.map(project => {
            return `
                <li>
                    <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                    <a href="${project.url}" target="_blank">${project.url}</a>
                </li>
            `;
        }).join('');
    }
}

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile-professionalExperience');
    if (professionalExperience) {
        professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
            return `
                <li>
                    <h3 class="title">${experience.name}</h3>
                    <p class="period">${experience.period}</p>
                    <p>${experience.description}</p>
                </li>
            `;
        }).join('');
    }
}

async function fetchProfileData() {
    // Simulação de fetch, substitua pela chamada real à API
    return {
        photo: "https://avatars.githubusercontent.com/u/169947010?v=4",
        name: "Lucas Souza",
        job: "web Developer",
        location: "Sorocaba, Brasil",
        phone: "+55 15 99814-6591",
        email: "souza.lucasp10@gmail.com",
        skills: {
            softSkills: ["Facilidade com tarefas práticas", "Comunicação", "Liderança", "Trabalho em Equipe", "Organização", "Comprometimento com resultados"],
            hardSkills: [
                { name: "JavaScript", logo: "https://example.com/js-logo.png" },
                { name: "React", logo: "https://example.com/react-logo.png" }
            ]
        },
        languages: ["Português", "Inglês"],
        portfolio: [
            { name: "Projeto 1", url: "https://github.com/johndoe/projeto1", github: true },
            { name: "Projeto 2", url: "https://johndoe.com/projeto2" }
        ],
        professionalExperience: [
            { name: "Empresa X", period: "2020 - 2023", description: "Desenvolvimento full-stack." }
        ]
    };
}

(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateProfessionalExperience(profileData);
})();
