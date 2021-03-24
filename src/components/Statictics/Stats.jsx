import PropTypes from 'prop-types';
const setColor = () => {
  const randomColor = '#' + Math.random().toString(16).substr(2, 6);
  return randomColor;
};
const Stats = ({ percentage, label }) => (
  <li
    className="item"
    style={{
      backgroundColor: `${setColor()}`,
    }}
  >
    <span className="label">{label}</span>
    <span className="percentage">{percentage}%</span>
  </li>
);
Stats.propTypes = {
  percentage: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};
export default Stats;
