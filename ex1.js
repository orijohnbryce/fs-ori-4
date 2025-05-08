async function fetchJoke() {
    const url = "https://official-joke-api.appspot.com/random_joke";

    try {
        const response = await fetch(url, {method: 'GET'});
        const resJ = response.json();
        return resJ;
    } catch (error) {
        console.error(error);
        alert("Error feching joke, plaese retry later")
    }
}


async function handleGetNewJoke() {
    const NewJokeDiv = document.querySelector("#new-joke")
    const AllJokeDiv = document.querySelector("#all-jokes")

    let newJoke;
    try {
        newJoke = await fetchJoke();

    } catch (error) {
        console.error(error);
        alert("Error feching joke, plaese retry later")
        return;
    }

    NewJokeDiv.innerHTML = `<h2>${newJoke.setup}</h2>  <p>${newJoke.punchline}</p>`

    const newEl = document.createElement("div");
    newEl.innerHTML = `<h2>${newJoke.setup}</h2>  <p>${newJoke.punchline}</p>`;
    // newEl.addEventListener("click", (e) => { e.target.remove() })
    newEl.addEventListener("click", (e) => { e.currentTarget.remove() })
    AllJokeDiv.appendChild(newEl);
}