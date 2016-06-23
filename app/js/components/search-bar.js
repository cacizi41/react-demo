const React = require('react');

module.exports = props => (
  <div className={props.className}>
  <input className="search" type="search" placeholder="Search..." />
  <br />
  <input type="checkbox" value="searchItem"  />
  <label>Only show products in stock</label>
  </div>
);
