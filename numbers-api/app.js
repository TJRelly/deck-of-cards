let url = "http://numbersapi.com/1..7?json"

const oneToSeven = axios.get(url)

oneToSeven
    .then(res => {
        console.log(res.data)

        const facts = Object.values(res.data)

        for (const fact of facts) {
            $(".one-seven").append(`<li class="list-group-item list-group-item-light">${fact}</li>`)
        }  
    })
    .catch(err => console.log(err))

    // Favorite Number
    const sevenSevenFacts = []

    const url2 = "http://numbersapi.com/7?json"

    for (let i = 0; i < 7; i++) {
        sevenSevenFacts.push(
            axios.get(url2)
        )
    }
    
    Promise.all(sevenSevenFacts)
        .then(facts => (
            facts.forEach(fact => 
                $(".fav-num").append(`<li class="list-group-item list-group-item-light">${fact.data.text}</li>`))
        ))
        .catch(err => console.log(err))