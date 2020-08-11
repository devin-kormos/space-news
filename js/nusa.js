$.ajax({
    type: "GET",
    url: "https://api.nasa.gov/planetary/apod?api_key=jdTmHkNVCjPFFHXA4IEfRkpmKkb0573O78JpfrgQ",
    success: function(data) {
        $("#nsPix").append(`<div class="jumbotron">
        <h1 class="display-5 text-center">Picture of the Day</h1>
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

$.ajax({
    type: "GET",
    url: "https://api.nasa.gov/insight_weather/?api_key=jdTmHkNVCjPFFHXA4IEfRkpmKkb0573O78JpfrgQ&feedtype=json&ver=1.0",
    success: function(data) {
        console.log("pepee", data)
    },
    error: function() {
        console.log("error")
    }
})