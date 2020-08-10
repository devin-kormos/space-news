let urlA = "https://api.nasa.gov/planetary/apod"
urlA += "?api_key=jdTmHkNVCjPFFHXA4IEfRkpmKkb0573O78JpfrgQ"
$.ajax({
    type: "GET",
    url: urlA,
    success: function(data) {
        $("#nsPix").append(`<div class="jumbotron">
        <h1 class="display-4 text-center">Picture of the Day</h1>
        <img src="${data.hdurl}" class="img-fluid rounded mx-auto d-block" alt="Picture of the Day">
        <blockquote class="blockquote text-center">
        <p class="mb-0 badge wh-spc">${data.date}<cite title="Source Title">
        <a href="${data.url}" target="_blank" class="disabled">${data.title}</a></cite>
        </blockquote>
        <p class="h6">${data.explanation}</p></div>`)
    },
    error: function() {
        console.log("error")
    }
})