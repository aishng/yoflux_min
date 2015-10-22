Object.assign = require('object-assign');
var React = require('react');
var ReactDOM = require('react-dom');
var Fluxible = require('fluxible');
var Component = require('./app/Component');
var Store = require('./app/Store');
var Store2 = require('./app/Store2');

var app = new Fluxible({
    component: Component,
    stores: [Store, Store2]
});

var context = app.createContext();

ReactDOM.render(
    React.createElement(Component, { context: context.getComponentContext() }),
    document.getElementById('container')
);

module.exports = app;
