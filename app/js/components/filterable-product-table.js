const React = require('react');
const SearchBar = require('./search-bar');
const ProductTable = require('./product-table');

module.exports = props => (
  <section className={props.className}>
    <SearchBar className="searchBar"/>
    <ProductTable className="productTable" />
  </section>
);
