var React = require('react');
var Action = require('./Action');

module.exports = React.createClass({
    displayName: 'Component',

    handleChange: function(e) {
        this.props.context.executeAction(Action, e.target.value);
    },

    render: function() {
        return React.createElement('input', {
            onChange: this.handleChange,
            value: this.props.testValue,
            valueTwo: this.props.testValueTwo
        });
    }
});
