var createStore = require('fluxible/addons/createStore');

var TestStore = createStore({
    storeName: 'TestStore',
    handlers: {
        'TEST_ACTION': 'handleTestAction'
    },

    getInitialState: function() {
        return {
            testValue: ''
        }
    },

    handleTestAction: function(testValue) {
        this.testValue = testValue + '';
        this.emitChange();
    },

    getTestValue: function() {
        return this.testValue;
    }
});

module.exports = TestStore;
