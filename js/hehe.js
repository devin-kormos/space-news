$(document).ready(function() {
    setTimeout(function(){
        $('body').addClass('loaded')
    }, 200)
    setTimeout(function(){
        $('#loading').addClass('none')
    }, 400)
})

commaSeparateNumber = (val) => {
    while (/(\d+)(\d{3})/.test(val.toString())){
        val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2')
    }
    return val
}

$(`#filter a`).click(function() {
    var refTag = this.id.replace(``, ``),
        refTagSlo = new RegExp(refTag, `i`)
    var rows = $(`main .stuffs .container .jumbotron`).show()
    console.log(refTag, refTagSlo);
    if (refTag != `all`) {
        rows.filter(function() {
            console.log($(this).children().last().text().match(refTagSlo))
            return !$(this).children().last().text().match(refTagSlo)
    })
    .hide()
    }
})