$(document).ready(function() {
    setTimeout(function(){
        $('body').addClass('loadd')
        $('#loade').addClass('none')
    }, 200)
})

commaSeparateNumber = (val) => {
    while (/(\d+)(\d{3})/.test(val.toString())){
        val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2')
    }
    return val
}