var createStore = require('fluxible/addons/createStore');

module.exports = createStore({
    storeName: '_Store',

    handlers: {
        '_ACTION': 'handleAction'
    },

    handleAction: function(value) {
        this.inputValue = value + ' ';
        this.emitChange();
    },

    getInputValue: function() {
        return this.inputValue;
    }
});
