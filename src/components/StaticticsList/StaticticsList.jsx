import PropTypes from 'prop-types';
import Stats from './Stats/Stats';

const StaticticsList = ({ statics, title }) => (
  <section className="statistics">
    {title ? <h2 className="title">{title}</h2> : ''}
    <ul className="stat-list">
      {statics.map(stat => (
        <Stats key={stat.id} label={stat.label} percentage={stat.percentage} />
      ))}
    </ul>
  </section>
);
StaticticsList.defaultProps = {
  title: '',
};
StaticticsList.propTypes = {
  title: PropTypes.string,
  statics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
export default StaticticsList;
