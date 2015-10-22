var createStore = require('fluxible/addons/createStore');

module.exports = createStore({
    storeName: '_Store2',

    handlers: {
        '_ACTION': 'handleAction'
    },

    handleAction: function(value) {
        this.inputValue = value.length;
        this.emitChange();
    },

    getInputValue: function() {
        return this.inputValue;
    }
});
