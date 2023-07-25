console.log("-----------Exercise 1-----------");

// Using the following random word API
// Make a request to the API and get a random word
// Then use that word to make a request to the Google Books API
// You should request a book whose title has that random word
// For your convenience, here is the URL for this API: 
// https://www.googleapis.com/books/v1/volumes?q=intitle:WORD_HERE

const queryHeroku = "https://random-word-api.herokuapp.com/word";
const queryTemplateGoogleBooks = "https://www.googleapis.com/books/v1/volumes?q=intitle:";

const MY_API_KEY = "aoAgVNwWXZshSsdfrOy2a0sW89UdNCZK";
const queryGiphy = function(word) {
    return `https://api.giphy.com/v1/gifs/search?q=${word}&api_key=${MY_API_KEY}`;
}



const getRandomWord = function () {
    return new Promise((resolve, reject) => {
        $.ajax({
                method: "GET",
                url: queryHeroku,
                success: (data) => resolve(data),
                error: (jqXHR, textStatus, errorThrown) => reject(new Error(errorThrown))
            });
    })
}

const getBookWithWord = function(word) {
    return new Promise((resolve, reject) => {
        $.ajax({
                method: "GET",
                url: queryTemplateGoogleBooks + word,
                success: (data) => resolve(data),
                error: (jqXHR, textStatus, errorThrown) => reject(new Error(errorThrown))
            });
    })
}

const getImageWithWord = function(word) {
    return new Promise((resolve, reject) => {
        $.ajax({
                method: "GET",
                url: queryGiphy(word),
                success: (data) => {
                    resolve(data);
                },
                error: (jqXHR, textStatus, errorThrown) => {
                    errorImage();
                    reject();
                }
            });
    })
}

const printImage = function(arrGif) {
  if (arrGif.data.length == 0) return;

  $("#my-img").attr("src", arrGif.data[0].embed_url);
}

const errorImage = function() {
  console.log("Something went wrong when trying to fetch GIF");
}

let word;
getRandomWord()
    .catch(() => console.log("error getting word from heroku"))
    .then(words => {
        word = words[0];
        let promiseBook = getBookWithWord(word);
        let promiseImage = getImageWithWord(word);
        return Promise.all([promiseBook, promiseImage]);
    })
    .then((promiseResults) => {
        let bookObjects = promiseResults[0];
        let imgObjects = promiseResults[1];
        printImage(imgObjects);
        try{
            $("#book").html(`word: ${word}, book: "${bookObjects.items[0].volumeInfo.title}"`);
        } catch {
            $("#book").html(`word: ${word}, book: error processing response from google`);
        }
    })

try {
    throw("Console error")
} catch {
    console.log("caught")
}