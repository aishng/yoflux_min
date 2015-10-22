module.exports = function Action(actionContext, payload) {
    actionContext.dispatch('TEST_ACTION', payload);
}
