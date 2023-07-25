const urllib = require('urllib')
const OMDB_API_KEY = "9ed6888a";


console.log('start')

const getMovie = async function(title) {
    const url = `http://www.omdbapi.com/?t=${title}
            &apikey=${OMDB_API_KEY}`
    const {data, res} = await urllib.request(url);
//    console.log(res.toString());
    console.log("Released: " + JSON.parse(data).Released);
}

getMovie("The Lion King");

console.log('end')
