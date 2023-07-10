console.log("---------Spot check 1------------")

$.get('https://www.googleapis.com/books/v1/volumes?q=title:Name of the Wind', function(result){
    console.log(result.items[0].volumeInfo.description);
})

console.log("---------Exercise 1, (functions modified for 3)------------")

const printTitle = function(response) {
  response.items.forEach((item) => {
    volumeInfo = item.volumeInfo;
    authorString = ("authors" in volumeInfo) ? (volumeInfo.authors.join(" & ")) : "No authors";
    isbnString = ("industryIdentifiers" in volumeInfo) ? volumeInfo.industryIdentifiers[0].identifier : "No ISBN13";
    console.log(isbnString, ", ", authorString, " - ", volumeInfo.title);
  })
}

const errorTitle = function() {
  console.log("Something went wrong when trying to fetch book info");
}

{

const fetch = function(isbn) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
    success: printTitle,
    error: errorTitle 
  })
}

fetch(9782806269171) // The Little Prince: Book Analysis
fetch(1440633908) //  Of Mice and Men by John Steinbeck
fetch(9781945048470) //  The Alchemist by Paulo Coelho
fetch(9780307417138) //  Hitchhiker’s Guide to the Galaxy

}

console.log("---------Exercise 2------------")
{

const fetch = function(queryType, queryValue) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
    success: printTitle,
    error: errorTitle 
  })
}

fetch("isbn", 9789814561778) // From Third World to First: The Singapore Story
fetch("title", "How to Win Friends and Influence People") // book by Dale Carnegie
}