const webpackOptions = {
    css: {
        loaderOptions: {
            scss: {
                /* Add any other functions, mixins or variables here to globally initialise the app */
                prependData: `
    			@import "~@e9ine/vue_components/src/scss/_variables.scss";
                @import '~@e9ine/vue_components/src/scss/mixins/buttons.scss';
                @import '~@e9ine/vue_components/src/scss/mixins/type.scss';
    			`,
            },
        },
    },

    lintOnSave: true,
};

module.exports = webpackOptions;
