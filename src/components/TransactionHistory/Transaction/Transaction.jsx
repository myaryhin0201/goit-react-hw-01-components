import './Transaction.scss';

const Transaction = ({ currency, amount, type }) => (
  <tr>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);
export default Transaction;
