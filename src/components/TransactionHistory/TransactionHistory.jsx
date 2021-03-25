import PropTypes from 'prop-types';
import Transaction from './Transaction';
import './Transaction.scss';

const TransactionHistory = ({ transHistory }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {transHistory.map(transaction => (
        <tr key={transaction.id}>
          <Transaction
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  transHistory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
export default TransactionHistory;
