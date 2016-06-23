const React = require('react');
const ReactDOM = require('react-dom');
var FilterableProductTable = require(__dirname + '/components/filterable-product-table');

ReactDOM.render(
  <FilterableProductTable className="filterableProductTable" />,
  document.getElementsByTagName('main')[0]
);
