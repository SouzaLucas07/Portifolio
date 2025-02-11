async function fetchprofileData(){
    const url = 'https://raw.githubusercontent.com/RenanJPaula/js-developer-portfolio/refs/heads/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}