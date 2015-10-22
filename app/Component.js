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
            value: this.props.inputValue,
            placeholder: this.props.placeholder
        });
    }
});

module.exports = provideContext(connectToStores(Component, ['_Store', '_Store2'], function(context, props) {
    return {
        inputValue: context.getStore('_Store').getInputValue(),
        placeholder: context.getStore('_Store2').getInputValue(),
    };
}));
