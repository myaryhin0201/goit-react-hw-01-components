import './Stats.scss';
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
export default Stats;
