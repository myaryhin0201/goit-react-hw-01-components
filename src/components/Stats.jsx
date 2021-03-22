import PropTypes from 'prop-types';
const Stats = ({percentage, label}) => (
<>
<span class="label">{label}</span>
<span class="percentage">{percentage}</span>
</>   
);
Stats.propTypes = {
        percentage: PropTypes.string.isRequired,
        label:PropTypes.string.isRequired,
}
export default  Stats;