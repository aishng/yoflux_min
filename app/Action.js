module.exports = function Action(actionContext, payload) {
    actionContext.dispatch('_ACTION', payload);
}
