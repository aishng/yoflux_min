var createStore = require('fluxible/addons/createStore');

module.exports = createStore({
    storeName: 'TestStore',

    handlers: {
        'TEST_ACTION': 'handleTestAction'
    },

    getInitialState: function() {
        return {
            testValue: ''
        }
    },

    handleTestAction: function(value) {
        this.testValue = value + ' ';
        this.emitChange();
    },

    getTestValue: function() {
        return this.testValue;
    }
});
