async function fetchRepose() {

    const url = "https://api.github.com/user/repos";

    // never put sensitive info as tokens/passwords in the code.
    const token = "<token>";

    const options = {
        method: 'GET',
        headers: {
            // "content-type": "application/json",
            Authorization: `Bearer ${token}`,
        }
    }
    try {
        const res = await fetch(url, options);
        const resJ = await res.json();
        console.log(resJ);
        return resJ;
    } catch (error) {
        console.log(error);
        alert("Error")
        return [];
    }
}

async function showRepos() {
    const repos = await fetchRepose();
    const reposDivEl = document.querySelector("#repos")
    for (const repo of repos) {
        reposDivEl.innerHTML += `<a href='${repo.clone_url}' target='_blank'> ${repo.name} </a> <br/>`
    }
}

// fetchRepose().then((res) => { console.log(res[0]) })