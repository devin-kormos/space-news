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