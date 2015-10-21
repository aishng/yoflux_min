var React = require('react');
var ReactDOM = require('react-dom');
var TestStore = require('./TestStore');
var testAction = require('./testAction');

var Component = React.createClass({
    displayName: 'TheMainComponent',

    handleChange: function(e) {
        this.props.context.executeAction(testAction, e.target.value);
    },

    render: function() {
        return React.createElement('input', {
            onChange: this.handleChange,
            value: this.props.testValue,
            valueTwo: this.props.testValueTwo
        });
    }
});

module.exports = Component;
