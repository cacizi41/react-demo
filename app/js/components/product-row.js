const React = require('react');

module.exports = props => (
  <p className={props.className}>
    <span className={props.stocked ? 'stocked': 'notStocked'}> {props.item} </span>
    {props.price}
  </p>
);
