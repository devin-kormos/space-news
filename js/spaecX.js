$.ajax({
    type: "GET",
    url: "https://api.spacexdata.com/v3/info",
    success: function(data) {
        $("#sxInfo").append(`<div class="jumbotron">
        <h1 class="display-5"><i>${data.name}</i></h1>
        <p class="h6">${data.name} was founded by ${data.founder} in ${data.founded} and is located in ${data.headquarters.city}, ${data.headquarters.state}.</p>
        <hr class="my-4">
        <p class="lead">${data.summary}</p>
        <hr class="my-4">
        <p>The company is valued at $${(commaSeparateNumber(data.valuation))}</p>
        <a class="badge badge-info" href="${data.links.website}" target="_blank" role="button">Website</a><a class="badge badge-primary ml-2" href="${data.links.twitter}" target="_blank" role="button">Twitter</a>
      </div>`)
    },
    error: function() {
        console.log("error")
    }
})

$.ajax({
    type: "GET",
    url: "https://api.spacexdata.com/v3/launches/latest",
    success: function(data) {
        let string = data.launch_date_utc
        let length = 10
        let trimmedString = string.substring(0, length) 
        didItBlowUp = (a) => {
        let result
        if (a = true) {
            result = "Success"
        } else {
            result = "Failure"
        }
        return result
        }
        let xd = data.rocket
        $("#sxNews").append(`<div class="jumbotron">
        <h1 class="display-5">${data.mission_name}</h1>
        <p class="h6">${trimmedString}</p>
        <hr class="my-4">
        <p class="h5">Rocket: <b>${xd.rocket_name}</b></b></p>
        <p class="h5">Flight ${data.flight_number}:<b> ${didItBlowUp(data.launch_success)}</b></p>
        <p class="h5">Launch Site: <b>${data.launch_site.site_name_long}</b></p>
        <hr class="my-4">
        <a class="badge badge-info" href="${data.links.article_link}" target="_blank" role="button">Article</a>
        <iframe class="mx-auto d-block rounded ytube-vid" src="https://www.youtube.com/embed/${data.links.youtube_id}" width="560" height="315" frameborder="0"></iframe>
        </div>`)
        // <img src="${data.links.flickr_images[2]}" class="img-fluid rounded mx-auto d-block" alt="launch picture">
        // <p class="h5"></b>The ${xd.rocket_name} had a payload of the ${xd.second_stage.payloads[0].payload_id} as well as the ${xd.second_stage.payloads[1].payload_id}</p>
    },
    error: function() {
        console.log("error")
    }
})

$.ajax({
    type: "GET",
    url: "https://api.spacexdata.com/v3/history/1",
    success: function(data) {
        let string = data.event_date_utc
        let length = 10
        let trimmedString = string.substring(0, length)
        $("#sxHis").append(`<div class="jumbotron">
        <h1 class="display-5">${data.title}</h1>
        <p class="h6">${trimmedString}</p>
        <hr class="my-4">
        <p class="lead">${data.details}</p>
        <iframe id="inlineFrameExample" title="Inline Frame Example" width="100%" height="400" src="${data.links.wikipedia}"> </iframe>`)
    },
    error: function() {
        console.log("error")
    }
})

// $.ajax({
//     type: "GET",
//     url: "https://api.spacexdata.com/v3/capsules/upcoming",
//     success: function(element) {
//         console.log(element)
//     },
//     error: function() {
//         console.log("error")
//     }
// })

// $.ajax({
//     type: "GET",
//     url: "https://api.spacexdata.com/v3/history",
//     success: function(element) {
//         console.log(element)
//     },
//     error: function() {
//         console.log("error")
//     }
// })

// $.ajax({
//     type: "GET",
//     url: "https://api.spacexdata.com/v3/launches",
//     success: function(element) {
//         console.log(element)
//     },
//     error: function() {
//         console.log("error")
//     }
// })