var React = require('react');
var ReactDOM = require('react-dom');
var Fluxible = require('fluxible');
var Component = require('./Component');
var TestStore = require('./TestStore');

var app = new Fluxible({
    component: Component
});

app.registerStore(TestStore);

var context = app.createContext();

ReactDOM.render(
    React.createElement(Component, {
        context: context,
        testValue: context.getStore(TestStore).getTestValue(),
        testValueTwo: 5
    }),
    document.getElementById('container')
);

module.exports = app;
