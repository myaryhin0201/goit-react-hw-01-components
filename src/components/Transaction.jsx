import PropTypes from 'prop-types';
import {Fragment} from 'react';
const Transaction = ({currency,amount,type}) => (
    <Fragment>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </Fragment>
);

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}
export default Transaction;