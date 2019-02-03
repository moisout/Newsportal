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
            },
            {
                name: "Lineageos",
                active: true
            }
        ],
        theme: 'light-theme'
    };

    this.loadSettings = function () {
        let me = this;
        let rawSettings = localStorage['settings'] || false;
        let settings = JSON.parse(rawSettings);

        if (settings === false) {
            console.log('no settings');
            localStorage['settings'] = JSON.stringify(this.settings);
        } else {
            console.log(settings);
            this.settings = JSON.parse(localStorage['settings']);
        }

        $('html').addClass(this.settings.theme);
        $(`input[value=${this.settings.theme}]`).prop('checked', true);

        $('input[name=theme]').on('change', function(){
            let theme = $('input[name=theme]:checked').val();
            me.settings.theme = theme;
            me.syncSettings();
        });
    }

    this.syncSettings = function(){
        localStorage['settings'] = JSON.stringify(this.settings);

        $('html').removeClass();
        $('html').addClass(this.settings.theme);
    }

    this.initSettings = function(){
        let me = this;
        $('.settings-btn').on('click', function () {
            $('.settings-cover').addClass('opened');
        });

        $('.settings-close-button').on('click', hideSettings);
        $('.settings-cover').on('mousedown', hideSettings).children().mousedown(function (e) {
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