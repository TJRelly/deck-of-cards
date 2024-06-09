$(document).ready($("button").click(pickCard));

const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
const deckPromise = axios.get(url);

function pickCard() {
  deckPromise
    .then((res) => {
      deckId = res.data.deck_id;
      return axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
      );
    })
    .then((res) => {
      imageSrc = res.data.cards[0].image;
      $(".card-img").attr("src", imageSrc);
      if (res.data.remaining === 0) $("button").remove();
    });
}

// deckPromise
//   .then((res) => {
//     printCard(res);
//     deckId = res.data.deck_id;
//     return axios.get(
//       `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
//     );
//   })
//   .then((res) => {
//     console.log(res);
//     printCard(res);
//   })
//   .catch((err) => console.log(err));

// function printCard(deck) {
//   value = deck.data.cards[0].value.toLowerCase();
//   suit = deck.data.cards[0].suit.toLowerCase();
//   console.log(value + " of " + suit);
// }
