function SettingsHandler() {
    this.settings = {
        sources: [{
                name: "NZZ",
                active: true
            },
            {
                name: "Golem.de",
                active: true
            },
            {
                name: "Blick",
                active: false
            }
        ],
        theme: 'light'
    };

    this.loadSettings = function () {
        var settings = localStorage['settings'] || false;

        if (settings === false) {
            console.log('no settings');
        } else {
            console.log(settings);
        }

        $('.settings-btn').on('click', function () {
            $('.settings-cover').addClass('opened');
        });

        $('.settings-close-button').on('click', hideSettings);
        $('.settings-cover').on('click', hideSettings).children().click(function (e) {
            return false;
        });

        function hideSettings() {
            $('.settings-cover').addClass('closing');
            $('.settings-container').addClass('closing');
            setTimeout(function(){
                $('.settings-cover').removeClass('opened');
                $('.settings-cover').removeClass('closing');
                $('.settings-container').removeClass('closing');
            }, 300);
        }
    }
}