const React = require('react');
const ProductRow = require('./product-row');
const ProductCategoryRow = require('./product-category-row');

module.exports = props => (
  <div className={props.className}>
    <h2>Name</h2>
    <h2>Price</h2>
    <ProductCategoryRow className="productCategoryRow" title="Sporting Goods" />
      <ProductRow className="productRow" item="Football" price="$49.99" stocked={true} />
      <ProductRow className="productRow" item="Baseball" price="$9.99" stocked={true}  />
      <ProductRow className="productRow" item="Basketball" price="$29.99" stocked={false} />
    <ProductCategoryRow className="productCategoryRow" title="Electronics" />
      <ProductRow className="productRow" item="iPod Touch" price="$99.99" stocked={true}  />
      <ProductRow className="productRow" item="iPhone 5" price="$399.99"  stocked={false} />
      <ProductRow className="productRow" item="Nexus 7" price="$199.99"  stocked={true} />
  </div>
);
