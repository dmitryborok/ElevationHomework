console.log ("-----Exercise 1-----");

// Create a StringFormatter module. It should have two functions:
// capitalizeFirst - receives a string and returns the string with the first letter uppercased, and the next ones lowercased
// toSkewerCase - receives a string and replaces any spaces with a dash

function StringFormatter() {
   let capitalizeFirst = (s) => s[0].toUpperCase() + s.slice(1).toLowerCase();
   let toSkewerCase = (s) => s.replace(" ", "-");
   return {capitalizeFirst: capitalizeFirst, toSkewerCase: toSkewerCase}
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should return Dorothy
console.log (formatter.toSkewerCase("blue box")) //should return blue-box

console.log ("-----Exercise 2-----");

// Create a Bank module. It should have a variable and two functions:
// A private money variable which starts off at 500
// A depositCash function which takes a cash parameter and uses it to increase money
// A checkBalance function which logs the money
 
function Bank() {
  let _money = 500;
  const depositCash = function(cash) {
    _money += cash;
  }
  const checkBalance = function() {
    console.log(_money);
  }
  return {deposit: depositCash, showBalance: checkBalance};
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950

console.log ("-----Exercise 3-----");

// Let’s make a simple SongsManager. Here is the desired result:
// const songsManager = SongsManager()
// songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
// songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
// songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

// songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ

// The addSong function in SongsManager will make sure that we only save the identifiers, like this:

// Of course, when we call getSong - it should give us the full URL!


function SongsManager() {
   let _songs = {};
   const add = function(song, url) {
      _songs[song] = url.slice(url.indexOf("?v=")+3);
   }
   const get = function(song) {
      if (song in _songs) {
         console.log(song, " ", "https://www.youtube.com/watch?v=" + _songs[song])
      } else {
         console.log(`Song ${song} not found`);
      }
   }
   return {addSong: add, getSong: get}
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.getSong("sasax") // should print "not found"