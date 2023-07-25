const getRandomWord = function (callback) {
    let words = ['Bonanza', 'Elusive', 'Hindrance', 'Astute', 'Polaroid', 'Phonic', 'Yonder']
    setTimeout(() => {
        callback(words[Math.floor(Math.random() * words.length)])
    }, 1000);
}

const getSynonyms = function(word, callback) {
    let thesauraus = {
        'Absolute': ['Definitive', 'Certain', 'Sure', 'Unequivocal'],
        'Astute': ['Sharp', 'Poignant', 'Clever'],
        'Azure': ['Blue', 'Cyan', 'Sky-blue'],
        'Bright': ['Luminous', 'Brilliant'],
        'Bonanza': ['Plethora', 'Smorgasboard', 'Copious', 'Plenty'],
        'Elusive': ['Slick', 'Slippery', 'Ethereal', 'Loose'],
        'Erode': ['Destroy', 'Wear out', 'Tarnish'],
        'Hindrance': ['Bother', 'Disturbance', 'Problematic'],
        'Phonic': ['Soundful'],
        'Ploy': ['Plan', 'Ruse'],
        'Polaroid': ['Photograph'],
        'Yap': ['Bark', 'Blab', 'Chatter'],
        'Yonder': ['There', 'Away', 'Far', 'Afar']
    }

    setTimeout(()=>{
        callback(thesauraus[word])
    }, 1000)
}

const getSentiment = function(word, callback) {
    let wordSentiment = {
        'Definitive': 1,
        'Sharp': 1,
        'Blue': 0,
        'Luminous': 1,
        'Plethora': 1,
        'Slick': -1,
        'Destroy': -1,
        'Bother': -1,
        'Soundful': 0,
        'Plan': 0,
        'Photograph': 0,
        'Bark': -1,
        'There': -1
    }
    setTimeout(()=>{
        callback(JSON.stringify(wordSentiment[word]))
    }, 1000) 
}

const getSentimentDescription = sentiment =>
    sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral";


// ask for a random word and get (supposing) “cat”
// then ask for cat synonyms and get ["kitty", "kitten", "pusycat"]
// then ask for the sentiment of the first synonym “kitty” and get 1, which means positive
// lastly we can print:
// The word cat has a synonym kitty which has a positive sentiment

console.log("-----------Spot check-----------");

// After figuring out the code, try to write the code that executes
//  this flow, and calls the functions in the right order.


// setTimeout(console.log(getSentiment(getSynonyms(getRandomWord((w) => w), w => w[0]), w =>getSentimentDescription(w))),0);

// let word = getRandomWord((w) => w);
// getSynonyms(word, w => w[0]);
// let synonym = getSynonyms(word, w => w[0]);
// let sentiment = getSentiment(synonym, w =>getSentimentDescription(w));
// console.log(`The word "${word}" has a synonym "${synonym}" which has a ${sentiment} sentiment`);

getRandomWord(function (word) {
  getSynonyms(word, function (synonyms) {
      getSentiment(synonyms[0], function (sentiment) {
          console.log(
              `The word ${word} has a synonym ${synonyms[0]} which has a ${getSentimentDescription(sentiment)} sentiment`)
      })
  })
})

// let word; 
// let synonym;
// let sentiment;
// getRandomWord((w) => {word = w;});
// setTimeout(() => getSynonyms(word, w => {console.log(w[0]); synonym = w[0]}), 1000);
// setTimeout(() => getSentiment(synonym, w => {console.log(w); sentiment = getSentimentDescription(w);}), 3000);
// setTimeout(() => console.log(`The word "${word}" has a synonym "${synonym}" which has a ${sentiment} sentiment`), 6000);
