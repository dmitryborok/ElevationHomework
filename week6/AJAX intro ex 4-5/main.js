console.log("---------Exercise 4------------")

const MY_API_KEY = "aoAgVNwWXZshSsdfrOy2a0sW89UdNCZK";

const printImage = function(arrGif) {
  if (arrGif.data.length == 0) return;

  $("#my-img").attr("src", arrGif.data[0].embed_url);
}

const errorImage = function() {
  alert("Something went wrong when trying to fetch GIF");
}


const fetch = function(imgQuery) {
  $.ajax({
    method: "GET",
    url: `https://api.giphy.com/v1/gifs/search?q=${imgQuery}&api_key=${MY_API_KEY}`,
    success: printImage,
    error: errorImage 
  })
}

$("#btn-submit").on("click", function() {
  let queryString = $("#query").val().trim();
  if (queryString != "") {
     fetch(queryString)
  }
})

