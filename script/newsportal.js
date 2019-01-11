function Newsportal() {
    this.debugUrl = '../../News-API';
    this.prodUrl = 'maurice.oeger.li/News-API';
    this.apiUrl;
    this.articleLoader = new ArticleLoader();

    this.loadBookmarks = function () {
        var bookmarks = localStorage['bookmarks'] || false;

        if (bookmarks === false) {
            console.log('no bookmarks');
        }
        else{
            console.log(bookmarks);
        }
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