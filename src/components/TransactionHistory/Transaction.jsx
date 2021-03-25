import { Fragment } from 'react';
const Transaction = ({ currency, amount, type }) => (
  <Fragment>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </Fragment>
);
export default Transaction;
