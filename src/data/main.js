async function fetchProfileData() {
    try {
        const response = await fetch("data/profile.json"); // Caminho correto do JSON
        if (!response.ok) {
            throw new Error("Erro ao carregar os dados");
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
        return null;
    }
}

function updateProfileInfo(profileData) {
    if (!profileData) return;

    const photo = document.getElementById('profile-photo');
    if (photo) {
        photo.src = profileData.photo;
        photo.alt = profileData.name;
    }

    const name = document.getElementById('profile-name');
    if (name) {
        name.innerText = profileData.name;
    }

    const job = document.getElementById('profile-job');
    if (job) {
        job.innerText = profileData.job;
    }

    const location = document.getElementById('profile-location');
    if (location) {
        location.innerText = profileData.location;
    }

    const phone = document.getElementById('profile-phone');
    if (phone) {
        phone.innerText = profileData.phone;
        phone.href = `tel:${profileData.phone.replace(/\D/g, '')}`;
    }

    const email = document.getElementById('profile-email');
    if (email) {
        email.innerText = profileData.email;
        email.href = `mailto:${profileData.email}`;
    }
}

(async () => {
    const profileData = await fetchProfileData();
    console.log(profileData);
    updateProfileInfo(profileData);
})();