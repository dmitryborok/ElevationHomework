$("#my-div").on("click", function() {
    $(this).css("background-color", "#f39c12");
})

const testApi = async function() {
    let result = await fetch("http://data.nba.net/10s/prod/v1/2016/players.json");
    console.log(result);
}

testApi();