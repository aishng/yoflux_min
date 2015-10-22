var React = require('react');
var Action = require('./Action');
var connectToStores = require('fluxible-addons-react/connectToStores');
var provideContext = require('fluxible-addons-react/provideContext');

var Component = React.createClass({
    displayName: 'Component',

    handleChange: function(e) {
        this.props.context.executeAction(Action, e.target.value);
    },

    render: function() {
        return React.createElement('input', {
            onChange: this.handleChange,
            value: this.props.inputValue
        });
    }
});

module.exports = provideContext(connectToStores(Component, ['_Store'], function(context, props) {
    return {
        inputValue: context.getStore('_Store').getInputValue()
    };
}));
