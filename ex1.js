function sortCards(cards) {
    const res = [];
    for (const card of cards) {
        if (card.color === "r") {
            // add to the beginning of the results-array
            res.unshift(card);
        } else {
            res.push(card);
        }
    }

    console.log(res);
}

sortCards([
    { color: 'r', number: 10 },
    { color: 'b', number: 9 },
    { color: 'r', number: 7 },
    { color: 'b', number: 8 },
    { color: 'r', number: 11 },
])
