function Newsportal() {
    this.debugUrl = '../../News-API';
    this.prodUrl = 'https://maurice.oeger.li/News-API';
    this.apiUrl;
    this.articleLoader = new ArticleLoader(this);

    this.loadBookmarks = function () {
        var bookmarks = localStorage['bookmarks'] || false;

        if (bookmarks === false) {
            console.log('no bookmarks');
        }
        else{
            console.log(bookmarks);
        }
    }
    
    this.initHeader = function(){
        $('#nav-expand-icon').click(function(){
            if($(this).hasClass('open')){
                $('.nav-btn-container').addClass('closing');
                $('.articles-section').css('padding-top', '');
                setTimeout(function(){
                    $('.nav-btn-container').removeClass('open');
                    $('.nav-btn-container').removeClass('closing');
                }, 300);
            }
            else{
                $('.nav-btn-container').addClass('open');
                $('.articles-section').css('padding-top', '120px');
            }

            $(this).toggleClass('open');
        });
    }

    let debug = location.href.includes('localhost');
    if (debug === true) {
        this.apiUrl = this.debugUrl;
        console.warn('running in debug mode');
    }
    else {
        this.apiUrl = this.prodUrl;
    }
}
//# sourceURL=newsportal.js