var React = require('react');
var ReactDOM = require('react-dom');
var Fluxible = require('fluxible');
var Component = require('./Component');
var Store = require('./Store');

var app = new Fluxible({
    component: Component,
    stores: [Store]
});

var context = app.createContext();

ReactDOM.render(
    React.createElement(Component, {
        context: context,
        testValue: context.getStore(Store).getTestValue(),
        testValueTwo: 5
    }),
    document.getElementById('container')
);

module.exports = app;
