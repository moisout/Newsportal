function bodyLoaded() {
    $.ajax({
        url: 'script/main.js',
        crossDomain: true,
        dataType: "script",
    })
}
