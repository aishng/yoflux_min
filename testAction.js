var testAction = function(actionContext, payload) {
    actionContext.dispatch('TEST_ACTION', payload);
}

module.exports = testAction;
