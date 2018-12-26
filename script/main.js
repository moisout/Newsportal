console.log('sdf');

$.ajax({
    url: 'components/article-preview.html',
    dataType: 'html'
})
.done(function(data){
    for (let index = 0; index < 3; index++) {
        $('.articles-section').append(data);
    }
    
});

//# sourceURL=main.js