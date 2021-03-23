import PropTypes from 'prop-types';

const Stats = ({percentage, label}) => (
<>
<span className="label">{label}</span>
<span className="percentage">{percentage}%</span>
</>   
);
Stats.propTypes = {
        percentage: PropTypes.number.isRequired,
        label:PropTypes.string.isRequired,
}
export default  Stats;