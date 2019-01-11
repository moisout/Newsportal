$.ajax({
    url: 'components/article-preview.html',
    dataType: 'html'
})
    .done(function (data) {
        for (let index = 0; index < 7; index++) {
            let article = $('.articles-section').append(data);
        }
        $('.loading-container').addClass('hidden');
    });

$('.bookmark-btn').on('click', function () {
    console.log('asd');
    $.ajax({
        url: `${new Newsportal().apiUrl}/getDebugArticle.php`
    })
        .done(function (data) {
            console.log(data);
        });
});

//# sourceURL=main.js